import React, { useState } from 'react'
import ShopButtonCard from './ShopButtonCard'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Card(props) {

  const [data, setData] = useState(null);
  

  const [isItSaved, setIsItSaved] = useState(false);
  const [nameOfTheUser, setNameOfTheUser] = useState(undefined);
  const [confirmAddition, setConfirmAddition] = useState(false);
  const navigate = useNavigate();


  const navigateToProduct = () => {
    navigate(`/product?product=${props.nameOfProduct}`)
  }

  useEffect(()=>{
    fetch(`/api/products?product=${props.nameOfProduct}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
  }, [])

  useEffect(()=>{
    if(!isItSaved){
      fetch("/api/uncryptToken", {
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
      fetch("/api/findUser", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: nameOfTheUser })
      })
      .then((response) => response.json())
      .then((data) => {
        data.shoppingCart.map((product) => {
            const onlyTheName = product.split("-")[0];
            if(onlyTheName == props.nameOfProduct){
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
          fetch("/api/user", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: nameOfTheUser, shoppingCart: `${data.name}-1`, shoppingCartMethod: "add" })
          })
          .then((response) => {
            response.json();
          })
          .catch((err) => console.log(err))
        }

        addToCart();

        
      }else{
        navigate('/shoppingCart');
      }
      
    }
    
  }, [confirmAddition])

  return (
    <div className='card'>

      <div className='cardBody' onClick={() => navigateToProduct(props.nameOfProduct)}>
        <img src={props.imageOfProduct} className='cardImage'></img>
        <div className='cardTitle'>{props.nameOfProduct}</div>
        <div className='cardProductType'>{props.typeOfProduct}</div>
        <div className='cardDescription'>{props.description}</div>
        <div className='cardPrice'>${props.priceOfProduct}</div>
      </div>
    
      <ShopButtonCard onClick={() => {setConfirmAddition(true)}} key={props.nameOfProduct + " shopButtonCard"} theProductIsSaved={isItSaved}></ShopButtonCard>

    </div>

    
  )
}

export default Card