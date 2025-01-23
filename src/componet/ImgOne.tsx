// import React from 'react'
import imga from '../componet/images/img 1.svg'
import img1a from '../componet/images/img 8.svg'
import imgb from '../componet/images/img 11.svg'
import imgc from '../componet/images/img 18.svg'
import arrow from '../componet/icons/arrow.svg'
import ratings from '../componet/icons/Ratings.svg'

interface props {
  text: String;
  second: string;
  thrd: string;
  forth: string;
  fith:  string;
}
function ImgOne({text, second, thrd,forth,fith,}: props) {

  return (
    <div>
      <div className="carousel w-7 " style={{width:"302px", height:"284px", gap:"10px", borderRadius:"12px", opacity:"0px"}}>
        <div id="slide1" className="carousel-item relative w-full">
         <img
          src={imga}
          className="w-full" />
         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
           <a href="#slide4" className="rotate-180"><img src={arrow} alt="" /></a>
           <a href="#slide2" className=""><img src={arrow} alt="" /></a>
         </div>
       </div>
       <div id="slide2" className="carousel-item relative w-full">
          <img
           src={img1a}
          className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="rotate-180"><img src={arrow} alt="" /></a>
            <a href="#slide3" className=""><img src={arrow} alt="" /></a>
         </div>
       </div>
       <div id="slide3" className="carousel-item relative w-full">
          <img
           src={imgb}
          className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="rotate-180"><img src={arrow} alt="" /></a>
            <a href="#slide4" className=""><img src={arrow} alt="" /></a>
          </div>
       </div>
       <div id="slide4" className="carousel-item relative w-full">
         <img
           src={imgc}
          className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="rotate-180"><img src={arrow} alt="" /></a>
            <a href="#slide1" className=""><img src={arrow} alt="" /></a>
         </div>
       </div>
     </div>
      <div className='flex space-x-7'>
        <h1>{text}</h1>
        <h3> <img src={ratings} alt="" /> {fith}</h3>
     </div>
     <div>
       <h5>{second}</h5>
       <h5>{thrd}</h5>
       <h2>{forth}</h2>
     </div>
   </div>
  )
}

export default ImgOne