// import React from 'react'
import ratings from './icons/Ratings.svg'
import img3 from './images/img 12.svg'
import img3b from './images/img 7.svg'
import img3c from './images/img 14.svg'
import img3d from './images/img 20.svg'
import ar from './icons/arrow.svg'


interface props {
  text: String;
  second: string;
  thrd: string;
  forth: string;
  fith:  string;
}
function Img12({text, second, thrd,forth,fith,}: props) {
  return (
    <div>
        <div className="carousel w-full " style={{width:"302px", height:"284px", gap:"10px", borderRadius:"12px", opacity:"0px"}}>
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="rotate-180"><img src={ar} alt="" /></a>
      <a href="#slide2" className=""><img src={ar} alt="" /></a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img3b}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="rotate-180"><img src={ar} alt="" /></a>
      <a href="#slide3" className=""><img src={ar} alt="" /></a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3c}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="rotate-180"><img src={ar} alt="" /></a>
      <a href="#slide4" className=""><img src={ar} alt="" /></a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img3d}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="rotate-180"><img src={ar} alt="" /></a>
      <a href="#slide1" className=""><img src={ar} alt="" /></a>
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

export default Img12