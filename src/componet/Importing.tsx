// import React from 'react'
import view from '../componet/icons/amazingviews.svg'
import cabins from '../componet/icons/cabins.svg'
import beachfront from '../componet/icons/beachfront.svg'
import skiing from '../componet/icons/skiing.svg'
import grandpionos from '../componet/icons/grandpino.svg'
import mansions from '../componet/icons/mansions.svg'
import omg from '../componet/icons/omg.svg'
import pool from '../componet/icons/amazing pool.svg'
import luxe from '../componet/icons/luxe.svg'
import boats from '../componet/icons/boats.svg'
import lake from '../componet/icons/lakefront.svg'
import treehouse from '../componet/icons/treehouse.svg'
import arrow from '../componet/icons/arrow.svg'
import filters from '../componet/icons/filte.svg'


function Importing() {
  return (
    <>
        <div className='py-5' style={{display:"flex",gap:"32px"}}>
           <div>
              <img src={view} alt="" />
          </div>
           <div>
              <img src={cabins} alt="" />
          </div>
           <div>
              <img src={beachfront} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={skiing} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={grandpionos} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={mansions} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={omg} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={pool} alt="" />
          </div>
           <div className='invisible victor:visible' >
              <img src={luxe} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={boats} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={lake} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={treehouse} alt="" />
          </div>
           <div className='invisible victor:visible'>
              <img src={arrow} alt="" className='will-change-transform' />
          </div>
           <div className='invisible emma:visible'>
              <img src={filters} alt="" />
          </div>
        </div>
      
    </>
  )
}

export default Importing