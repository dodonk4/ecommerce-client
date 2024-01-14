import React, { useEffect, useState } from 'react'
import CheckoutForm from "./Checkoutform"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, LinkAuthenticationElement } from '@stripe/react-stripe-js'
import { useUsercontext } from './userContext/UserProvider'
import useCatchUserAndProducts from '../hooks/catchUserAndProducts.js'
import useCatchTotal from '../hooks/catchTotal.js'


const stripePromise = loadStripe("pk_test_51OL4E7GEU6GUNtdOab24jC767QNRaMweDdX9UYp9c5NHll4H6BruUWHeI2XYZh5HOfr8TaLXSEut4WowonBo1vjI00yKXeNVtF")



let style = {
        
  base: {
      color: 'white',
      fontFamily: 'Avenir',
      fontSize: '12px'
  },
  invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
  }
  
};

function Payment() {

  console.log("INITIALIZATION")

  const [clientSecret, setClientSecret] = useState("");
  const [dataUser, setDataUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0)
  const user = useUsercontext();
  

  useEffect(()=>{
    console.log("asyncCatchUserAndProducts")
    const asyncCatchUserAndProducts = async () => {
      const initCatchUserAndProducts = await useCatchUserAndProducts();
      if(user){
       await initCatchUserAndProducts(user, setDataUser, setProducts, setLoading);
      }
    }
    asyncCatchUserAndProducts();
  }, [user])


  useEffect(() => {
    console.log("useCatchTotal")
    const initCatchTotal = useCatchTotal();
    if(dataUser && products) {
      initCatchTotal(dataUser, products, setTotalPrice);
    }

  }, [dataUser, products]);


  useEffect(() => {
    console.log("fetchData")

      const fetchData = async () => {

        if(totalPrice != 0){
          console.log("PRICE CHAPTER")
          console.log("Entre")
          try {
            // Create PaymentIntent as soon as the page loads
          await fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ name: "xl-tshirt", price: totalPrice }] }),
          })
            .then(async (res) => {
              const thing = await res.json()
              console.log(await thing);
              setClientSecret(await thing.clientSecret)
            })
            // .then(async (data) => {
            //   console.log(data);
            //   setClientSecret(await data.clientSecret)
            //   console.log("hola")
            // });
          } catch (error) {
            console.log(error);
          }
        }
  
      } 
      fetchData();



  }, [totalPrice]);

 

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
    {
        clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )
    }
    </>
  )
}

export default Payment