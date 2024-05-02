import React from 'react'
import Card from './Card'

function Hero() {
  return (
    <section id="Hero">
        <div id="hero-content" className='heroContent'>
          <div className='promosText heroPromoText'>
            <div className='heroText1Subtitle'>APROVECHA AHORA</div>
            <div className='heroText1Title'>NUEVO PRODUCTO</div>
            <div className='heroText1Footer'>Disponible hasta el 25/5/2024</div>
            <button className='promoButton'>Ver Productos</button>
          </div>
          <img className='hero-image' src='images/jblgo3.png'></img>
          
          {/* <img className='hero-image' src='images/jblgo3.png'></img> */}
          {/* <div className='heroText2'>Lorem Ipsum</div> */}
        </div>
    </section>
  )
}

export default Hero