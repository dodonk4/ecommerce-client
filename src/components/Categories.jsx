import React, { useEffect, useState } from 'react';
import Card from './Card.jsx';
import Footer from './Footer.jsx';

function Categories() {

  console.log(import.meta.env.VITE_REACT_APP_API)

  const [data, setData] = useState(null);
  const [categ, setCateg] = useState("Celulares");
  const [activation, setActivation] = useState(false);

  const categories = ["Celulares", "Componentes", "Televisores", "Perifericos", "Parlantes", "Computadoras"];

  const [categoryClasses, setCategoryClasses] = useState({
    "Celulares": "categorySelected",
    "Componentes": "",
    "Televisores": "",
    "Perifericos": "",
    "Parlantes": "",
    "Computadoras": ""
  });

  const selectCategory = (category) => {
    setCateg(category);
    setCategoryClasses((prevClasses) => ({
      ...Object.fromEntries(categories.map(cat => [cat, ""])),
      [category]: "categorySelected"
    }));
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_API}api/products`)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return setData(data)
      });
  }, []);

  return (
    <div id='Categories'>
      <ul className='blockOfCategories'>
        {categories.map((category) => (
          <li key={category}>
            <a onClick={() => selectCategory(category)} className={categoryClasses[category]}>
              {category.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>


      {!data && (
        <div className='loaderBox'><div className='loader'/></div>
        
      )}

      {
        data && (

          <ul className='listOfCards'>
        
            {data?.map((product) => {
              if (product.category === categ) {

                return (

                  <Card
                    key={product.name}
                    nameOfProduct={product.name}
                    imageOfProduct={product.image}
                    typeOfProduct={product.type}
                    priceOfProduct={product.price.$numberDecimal}
                    description={product.description}
                  />
                );
              }
              return null;
            })}
      </ul>
        )
      }

      
      
    </div>
  );
}

export default Categories;