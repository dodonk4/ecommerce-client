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
            props.theProductIsSaved && (
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