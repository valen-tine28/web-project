import React from 'react'
import img2 from './images/img 2.svg'
import imgb from './images/img 10.svg'
import img2c from './images/img 13.svg'
import img2d from './images/img 17.svg'
import Img14 from './Img14'
import Img8 from './Img8'
import Img7 from './Img7'
import Img6 from './Img6'

// const IMAGES = [img2, imgb, img2c, img2d]

function Img2() {
   let myArray =[
    {name: "img2", pic: [img2, img2d, img2c]},
    {name: "imgb", pic: [imgb, Img14, Img8] },
    {name: "img2c", pic: [Img7, Img6, img2c]},
    {name: "img2d", pic: [imgb, img2d, img2] },
   ]

  return (
    <>
        <div>
          {myArray.map((item, i)=>(
            <div key={i} className='' style={{}}>

            </div>
          ))}
        </div>
    </>
  )
}

export default Img2