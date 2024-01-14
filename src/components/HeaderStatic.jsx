import React from 'react'
import { Profile } from './Profile'

function HeaderStatic() {
  return (
    <header className='header'>
      <img className='logo' src='images/logo.png'></img>
        <nav className='nav-2'>
            <a href='/'>INICIO</a>
            <a href='/shoppingCart'>CARRITO</a>

        </nav>


        <Profile></Profile>
    </header>
  )
}

export default HeaderStatic