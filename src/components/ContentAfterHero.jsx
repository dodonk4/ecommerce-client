import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContentAfterHero() {

  const navigate = useNavigate();

  const directToRoute = (route) => {
    navigate(`/categories/${route}`);
  }

  return (
    <section id='ContentAfterHero' className='contentAfterHeroBox'>
        <div className='contentAfterHero'>
             <div className='promo1 promo' onClick={() => directToRoute("componentes")}>
              <img className="promoImage promo1Image" src='images/gtx1660.png'></img>
              <div className='promoTextAfterHero'>
                <a>COMPONENTES</a>
              </div>
            </div>
            <div className='promo2 promo' onClick={() => directToRoute("celulares")}>
              <img className="promoImage promo2Image" src='images/flip.png'></img>
              <div className='promoTextAfterHero'>
                <a>CELULARES</a>
              </div>
            </div>
            <div className='promo3 promo' onClick={() => directToRoute("parlantes")}>
              <img className='promoImage promo3Image' src='images/jblflip5.png'></img>
              <div className='promoTextAfterHero'>
                <a>PARLANTES</a>
              </div>
              
            </div>
            <div className='promo4 promo' onClick={() => directToRoute("televisores")}>
              <img className="promoImage promo4Image" src='images/noblexastro39.png'></img>
              <div className='promoTextAfterHero'>
                <a>TELEVISORES</a>
              </div>
            </div>
            <div className='promo5 promo' onClick={() => directToRoute("perifericos")}>
              <img className="promoImage promo5Image" src='images/g413.png'></img>
              <div className='promoTextAfterHero'>
                <a>PERIFERICOS</a>
              </div>
            </div>
            <div className='promo6 promo' onClick={() => directToRoute("computadoras")}>
            <img className="promoImage promo6Image" src='images/dellinspiron.png'></img>
              <div className='promoTextAfterHero'>
                <a>COMPUTADORAS</a>
              </div>
            </div>
        </div>
        


    </section>
    
  )
}

export default ContentAfterHero