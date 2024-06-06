import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Profile } from './Profile';


function Header() {

  

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [classState, setClassState] = useState("notShownInResponsive");

  const changeClass = () => {
    if(classState === "notShownInResponsive"){
      setClassState("shownInResponsive");
    }else{
      setClassState("notShownInResponsive");
    }
  }

  return (
    <>
      <header className='header'>

        <div className='mainHeader'>
          <img className='logo' src='../images/logo.png'></img>
          <nav className={'nav ' + classState}>
            <ul className='navOptions'>
              <NavLink className="fakeLi" onClick={() => setClassState("notShownInResponsive")} to="/">INICIO</NavLink>
              <NavLink className="fakeLi" onClick={() => setClassState("notShownInResponsive")} to="/categories">CATEGORIAS</NavLink>
            </ul>
            {/* <img className="searchLogo" src="images/lupa.png"></img> */}
          </nav>
          <Profile key="profile" changeClass={changeClass}></Profile>
        </div>      

     

      </header>
      {/* <div className='searchDiv'>
        <input value={inputValue} onChange={handleInputChange} onKeyDown={handleEnterPress} className='searchBar' type='text' placeholder='buscar...'></input>
      </div> */}
    </>
  )
}

export default Header