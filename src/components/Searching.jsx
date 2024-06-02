import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

function Searching() {

  const location = useLocation();

  const [data, setData] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  // const filter = queryParams.get('filter');

  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_REACT_APP_API}api/products?${queryParams}`)
        // .then((response) => response.json())
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return setData(data);
        });
    } catch (error) {
      setData("notFound");
    }
    
}, [location.search])

  // console.log(data);

  const filterFunction = (data) => {
    //Categories
    //If data match exactly any of categories, it wil only look the api for that cvategoriews
  }
 
  return (
    <div className='searchingBox'>
      {!data && (
        <div className='loaderBox'><div className='loader'/></div>
      )}
      {data && (
        <ul className='listOfCards searching'>
        {/* Acá deberían de aparecer en Cards */}
        {data?.map((product) => {
            return (
              <Card key={product.name} nameOfProduct={product.name} imageOfProduct={product.image} typeOfProduct={product.type} priceOfProduct={product.price.$numberDecimal} description={product.description}/>
          )

                
        })}
        </ul>
      )}
      {data == "notFound" && (
        <div style="color: white">El producto no ha sido encontrado</div>
      ) 
      }
      
      
      </div>
  )
}

export default Searching