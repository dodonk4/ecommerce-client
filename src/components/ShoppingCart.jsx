import React, { useEffect } from 'react'
import { useState } from 'react';
import { CardShoppingCart } from './CardShoppingCart';
import { useUsercontext } from './userContext/UserProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import useCatchUserAndProducts from '../hooks/catchUserAndProducts.js'
import useCatchTotal from '../hooks/catchTotal.js';

export default function ShoppingCart() {

  const navigate = useNavigate();

  const user = useUsercontext();
  const [dataUser, setDataUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(()=>{
    const testAsyncFunction = async () => {
      const initCatchUserAndProducts = await useCatchUserAndProducts();
      if(user){
       await initCatchUserAndProducts(user, setDataUser, setProducts, setLoading);
      }
    }
    testAsyncFunction();
    
  }, [user])

  useEffect(() => {

      const initCatchTotal = useCatchTotal();
      if(dataUser && products) {
        initCatchTotal(dataUser, products, setTotalPrice);
      }

  }, [dataUser, products]);


  if (loading) {
    return <div className='loaderBox'><div className='loader'/></div>
  }

  const productsInShoppingCart = dataUser.shoppingCart.map((cartItem) => {
    const [productName, quantity] = cartItem.split('-');
    const productMatched = products.find((product) => product.name === productName);
  
    return productMatched ? { ...productMatched, quantity } : null;
  }).filter(Boolean);



  const handleTotal = (newPrice, operator) => {
    if(operator === "+"){
      setTotalPrice(totalPrice + newPrice);
    }else{
      setTotalPrice(totalPrice - newPrice);
    }
      
  };

  const goToPayment = () => {
    navigate("/payment-2");
  }

  return (
    <div className='shoppingCart'>

      <div className='cartCardsContainer'>
        {productsInShoppingCart?.map((product)=> {

          return ( 
              
            <CardShoppingCart key={product.name} nameOfProduct={product.name} priceOfProduct={product.price.$numberDecimal} quantity={product.quantity} imageOfProduct={product.image} onTotalChange={handleTotal}></CardShoppingCart>
              
          )
        })}
      </div>
      <div className='total'>
        {/* {
          productsInShoppingCart?.map((product)=> {
            return (
              // <h3>{product.price * product.quantity}</h3>
              <h3><b>{product.quantity} x {product.price.$numberDecimal} = </b> {product.price.$numberDecimal * product.quantity}</h3>
            )
          })
        } */}
        <h1>TOTAL: {totalPrice}</h1>
        <input type='button' value='COMPRAR' className='shoppingCartBuyButton' onClick={goToPayment} />
      </div>
    
    {/* <input type='button' value='BUY' className='shoppingCartBuyButton'/> */}

      
    </div>
  )
}
