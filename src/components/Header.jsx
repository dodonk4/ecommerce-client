import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Profile } from './Profile';


function Header() {

  

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [classState, setClassState] = useState("notShownInResponsive");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Navegar a la nueva ruta con el valor del input como parámetro
      navigate(`/fafa?filter=${inputValue}`);//????????????????????????????????????????????
    }
  };

  const changeClass = () => {
    if(classState === "notShownInResponsive"){
      setClassState("shownInResponsive");
    }else{
      setClassState("notShownInResponsive");
    }
    console.log(classState);

  }


  return (
    <>
      <header className='header'>

        <div className='mainHeader'>
          <img className='logo' src='images/logo.png'></img>
          <nav className={'nav ' + classState}>
            <ul className='navOptions'>
              <li>INICIO</li>
              <li>CATEGORIAS</li>
              <li>SOBRE NOSOTROS</li>
            </ul>
            {/* <img className="searchLogo" src="images/lupa.png"></img> */}
          </nav>
          <Profile key="profile" changeClass={changeClass}></Profile>
        </div>      

      <div className='searchDiv'>
        <input value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPress} className='searchBar' type='text' placeholder='buscar...'></input>
      </div>

      </header>
    </>
  )
}

export default Header