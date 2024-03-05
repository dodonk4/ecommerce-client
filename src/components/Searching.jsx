import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import HeaderStatic from './HeaderStatic';

function Searching() {

  const location = useLocation();

  const [data, setData] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  // const filter = queryParams.get('filter');

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_REACT_APP_API}api/products?${queryParams}`)
        .then((response) => response.json())
        .then((data) => setData(data), console.log(data));
    } catch (error) {
      console.log(error)
    }
    
}, [])

  const filterFunction = (data) => {
    //Categories
    //If data match exactly any of categories, it wil only look the api for that cvategoriews
  }
 
  return (
    <div className='searchingBox'>
      <HeaderStatic/>
      {!data && (
        <div className='loaderBox'><div className='loader'/></div>
      )}
      {data && (
        <ul className='listOfCards searching'>
        {/* Acá deberían de aparecer en Cards */}
        {data?.map((product) => {
          console.log(product)
            return (
              <Card key={product.name} nameOfProduct={product.name} imageOfProduct={product.image} typeOfProduct={product.type} priceOfProduct={product.price.$numberDecimal} description={product.description}/>
          )

                
        })}
        </ul>
      )}
      
      
      </div>
  )
}

export default Searching