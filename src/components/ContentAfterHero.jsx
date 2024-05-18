import React from 'react'
import { Link } from 'react-router-dom'

function ContentAfterHero() {
  return (
    <section id='ContentAfterHero' className='contentAfterHeroBox'>
        <div className='contentAfterHero'>
             <div className='promo1 promo'>
              <img className="promoImage promo1Image" src='images/gtx1660.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/componentes`}>COMPONENTES</Link>
              </div>
            </div>
            <div className='promo2 promo'>
              <img className="promoImage promo2Image" src='images/flip.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/celulares`}>CELULARES</Link>
              </div>
            </div>
            <div className='promo3 promo'>
              <img className='promoImage promo3Image' src='images/jblflip5.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/parlantes`}>PARLANTES</Link>
              </div>
              
            </div>
            <div className='promo4 promo'>
              <img className="promoImage promo4Image" src='images/noblexastro39.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/televisores`}>TELEVISORES</Link>
              </div>
            </div>
            <div className='promo5 promo'>
              <img className="promoImage promo5Image" src='images/g413.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/perifericos`}>PERIFERICOS</Link>
              </div>
            </div>
            <div className='promo6 promo'>
            <img className="promoImage promo6Image" src='images/dellinspiron.png'></img>
              <div className='promoTextAfterHero'>
                <Link key="algo" to={`/categories/computadoras`}>COMPUTADORAS</Link>
              </div>
            </div>
        </div>
        


    </section>
    
  )
}

export default ContentAfterHero