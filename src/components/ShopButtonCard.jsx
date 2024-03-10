import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ShopButtonCard(props) {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  const [classForNonSavedProduct, setClassForNonSavedProduct] = useState("shopCardButton");
  const [title, setTitle] = useState("Agregar");

  const saveProduct = () => {
    setClassForNonSavedProduct("shopCardButton isSaved");
    setTitle("Agregado");
    props.onClick();
  }

  const userLogged = !!localStorage.getItem("token");

  return (
    <>

    

    {
      userLogged && (
        <>
          {
            props.theProductIsSaved == 1 && (
              // <div className='shopCardButton' onClick={() => navigate("/shoppingCart")}>
              //   NO
              // </div>
              <div className='shopCardButton loading'>
                <div className='tinyLoader'/>
              </div>
              // <div className='loaderBox tiny'></div>
            )
          }
          {
            props.theProductIsSaved == 2 && (
              <div className='shopCardButton isSaved' onClick={() => navigate("/shoppingCart")}>
                Agregado
              </div>
            )
          }
          {
             !props.theProductIsSaved && (
              <div className={classForNonSavedProduct} onClick={saveProduct}>
                {title}
              </div>
            )
          }
        </>
      )
    }

    {
      !userLogged && (
        <div className='shopCardButton' onClick={goToLogin}>
          Agregar
        </div>
      )
    }
      
    </>
    
  )
}

export default ShopButtonCard