import React, { useEffect, useState } from 'react'
import buttonCategBack from '../utils/buttonCategBack.js';
import buttonCategNext from '../utils/buttonCategNext.js';
import Card from './Card.jsx';

function Categories() {

    const arrayOfCategs = ["TV", "Celular", "Computadora"];

    const [data, setData] = useState(null);

    const [numCateg, setNumCateg] = useState(0);
    const [categ, setCateg] = useState(arrayOfCategs[0]);


    useEffect(() => {
        fetch("/api/products")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [])

  return (
    <div id='Categories'>

        <h1>Categories</h1>

        <div className='categorySelector'>
            <button className='categButtons' onClick={() => buttonCategBack(numCateg, arrayOfCategs, setNumCateg, setCateg)}>{`<`}</button>
            <h2>{categ}</h2>
            <button className='categButtons' onClick={() => buttonCategNext(numCateg, arrayOfCategs, setNumCateg, setCateg)}>{`>`}</button>
        </div>


        <ul className='listOfCards'>
            {/* Acá deberían de aparecer en Cards */}
        {data?.map((product) => {
            if(product.category === categ){
                return (
                    <Card key={product.name} nameOfProduct={product.name} imageOfProduct={product.image}/>
                )
            }
        })}
        </ul>


    </div>
  )
}
