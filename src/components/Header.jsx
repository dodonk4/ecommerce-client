import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Profile } from './Profile';


function Header() {

  

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Navegar a la nueva ruta con el valor del input como parámetro
      navigate(`/fafa?filter=${inputValue}`);//????????????????????????????????????????????
    }
  };

  return (
    <header className='header'>
      <img className='logo' src='images/logo.png'></img>
        <nav className='nav'>
              <input value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPress} className='searchBar' type='text' placeholder='buscar...'></input>
        </nav>
        


        <Profile></Profile>
     
    </header>
  )
}

export default Header