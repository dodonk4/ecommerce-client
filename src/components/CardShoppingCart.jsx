import React, { useEffect, useState } from 'react'
import { useUsercontext } from './userContext/UserProvider';

export const CardShoppingCart = (props) => {


  const user = useUsercontext();
  const [confirmRemoval, setConfirmRemoval] = useState(false);

  const [price, setPrice] = useState(props.quantity * props.priceOfProduct);
  const [value, setValue] = useState(props.quantity);
  const [valueMovement, setValueMovement] = useState(0);

  const priceAndTotal = (e) => {
    if(typeof e === 'number'){ //In case of deleting elements, it reuses priceAndTotal
      props.onTotalChange(e, "-");
    }else{
      if(e.target.value <= 0){
        "";
      }else if(e.target.value < value){
        let quantityOfChanges = value - e.target.value;
        setValue(e.target.value);
        setValueMovement(valueMovement + 1);
        console.log(valueMovement);
        let newPrice = e.target.value * props.priceOfProduct
        setPrice(newPrice);
        props.onTotalChange(props.priceOfProduct * quantityOfChanges, "-");
      }else{
        let quantityOfChanges = e.target.value - value;
        setValue(e.target.value);
        setValueMovement(valueMovement + 1);
        console.log(valueMovement);
        let newPrice = e.target.value * props.priceOfProduct;
        setPrice(newPrice);
        props.onTotalChange(props.priceOfProduct * quantityOfChanges, "+");
    }

    }

    
    
}

  useEffect(() => {
    if(confirmRemoval){
      const deleteFromCart = () => {
        fetch(`${import.meta.env.VITE_REACT_APP_API}api/user`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { username: user, shoppingCart: props.nameOfProduct, shoppingCartMethod: "delete" } )
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      }
      deleteFromCart();
    }
    
  }, [confirmRemoval])

  useEffect(()=> {
    if(valueMovement != 0){
      const changeQuantity = () => {
        fetch(`${import.meta.env.VITE_REACT_APP_API}api/user`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { username: user, product: props.nameOfProduct, quantity: value, shoppingCartMethod: "replace" } )
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
      }
      changeQuantity()
    }
  }, [valueMovement])

   


  return (
    <>
    {
      !confirmRemoval && (
        <div className='cartCard'>
          <img src={props.imageOfProduct} className='cartCardImage'></img>
          <div className='cartCardTitle'>{props.nameOfProduct}</div>
          <div className='cartCardPrice'>${props.priceOfProduct}</div>
          <div className='cartCardPriceMultiplied'>${price}</div>
          <input className='cartCardQuantity' type='number' value={value} onChange={priceAndTotal} ></input>
          <img src='../images/close.png' className='cartCardDeleteButton' onClick={() => {
            if (window.confirm('¿Realmente quieres eliminar este producto?')){
              setConfirmRemoval(true)
              props.changeOfCountOfProducts(props.countOfProducts - 1);
              priceAndTotal(price);
            }
            }}></img>
          
        </div>
      )
    }
      
    </>
  )
}
