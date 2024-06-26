import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
// import User from '../../../server/src/schemas/User';
import HeaderStatic from './HeaderStatic';

function Product() {

    const location = useLocation();

    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const productName = queryParams.get('product');

    const goBack = () => {
      navigate("/");
    }
    
    const [data, setData] = useState(null);

    const [product, setProduct] = useState(false);
    const [isItSaved, setIsItSaved] = useState(false);
    const [nameOfTheUser, setNameOfTheUser] = useState(undefined);

    const [user, setUser] = useState(null);
    const [confirmAddition, setConfirmAddition] = useState(false);

   
    useEffect(()=>{
      fetch(`${import.meta.env.VITE_REACT_APP_API}api/products?product=${productName}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
    }, [])

    
    // useEffect(() => {
    //   if(data){ 
    //     fetch("/api/uncryptToken", {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ token: localStorage.getItem('token') })
    //     })
    //     .then((response) => response.json())
    //     .then((data2) => {
    //       setUser(data2.username)
    //       let rawShoppingCart = data2.shoppingCart;
    //       for (let i = 0; i < rawShoppingCart.length; i++) {
    //         const productInShoppingCart = rawShoppingCart[i].split("-")[0];
    //         if(productInShoppingCart === data.name){
    //           setProduct(true);
    //         }
    //       }
    //     })
    //     .catch((err) => console.log(err))
    //   }
    // })

    useEffect(()=>{
      if(!isItSaved){
        fetch(`${import.meta.env.VITE_REACT_APP_API}api/uncryptToken`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: localStorage.getItem('token') })
        })
        .then((response) => response.json())
        .then((data) => {
          setNameOfTheUser(data.username);
        });
      }
      
  }, [])
  
    useEffect(()=>{
      if(nameOfTheUser){
        fetch(`${import.meta.env.VITE_REACT_APP_API}api/findUser`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: nameOfTheUser })
        })
        .then((response) => response.json())
        .then((data) => {
          data.shoppingCart.map((product) => {
              const onlyTheName = product.split("-")[0];
              if(onlyTheName == productName){
                setIsItSaved(true);
              }
            })
        });
      }
    }, [nameOfTheUser])
  
      
    
    useEffect(() => {
      if(confirmAddition){
        if(!isItSaved){
          const addToCart = () => {
            fetch(`${import.meta.env.VITE_REACT_APP_API}api/user`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username: nameOfTheUser, shoppingCart: `${data.name}-1`, shoppingCartMethod: "add" })
            })
            .then((response) => {
              response.json();
            })
            .then((data3) => navigate('/shoppingCart'))
            .catch((err) => console.log(err))
          }
  
          addToCart();

          
        }else{
          navigate('/shoppingCart');
        }
        
      }
      
    }, [confirmAddition])
     
    
    

  return (
    <>
      <img className='goBackButton' onClick={() => navigate(-1)} src='../images/backArrow.png'></img>
      {/* <div>
        <img className='goBackButton' onClick={goBack} src='../images/backArrow.png'></img>
        <div className='backgroundGoBackButton'></div>
      </div> */}
      

      {!data && (
        <div className='loaderBox'><div className='loader'/></div>
      )}
      
      {data && (

          <div className='productBody'>



            <div className='productImageContainer'>
              <img src={data[0].image} className='productImage'></img>
            </div>


            <div className='productTexts'>
              <div className='productName'>{data[0].fullname}</div>
              <div className='productType'>{data[0].type}</div>
              <div className='productDescription'>{data[0].description}</div>
              {/* <div className='productDescription'>{data.caracteristics}</div> */}
              <div className='productStock'><b>Unidades disponibles: {data[0].stock}</b></div>
              {/* <div className='productPrice'>${data.price.$numberDecimal}</div> */}

              {
                isItSaved && <input type="button" value="Agregado" className='addToCartButton' onClick={() => setConfirmAddition(true)}></input>
              }

              {
                !isItSaved && <input type="button" value="Agregar a Carrito" className='addToCartButton' onClick={() => setConfirmAddition(true)}></input>
              }

            
            </div>
            
            
              
          </div>
        )}
      
      </>
  )
}

export default Product