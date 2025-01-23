// import React from 'react'
import logo from '../componet/icons/Frame 1.svg'
import end from '../componet/icons/Frame 625781.svg'

function Heading() {
  return (
    <div>
      <div className='py-4' style={{display:"flex",justifyContent:"space-between"}}>
        <img src={logo} alt="" className='w-50 victor:w-72'/>
        <div>
          <div className="join invisible victor:visible">
            <div>
              <div>
                <input className="input input-bordered join-item" placeholder="Search" />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>Filter</option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button className="btn join-item">Search</button>
           </div>
          </div>
        </div>
        <img src={end} alt="" className='invisible victor:visible'/>
      </div>
   </div>
  )
}

export default Heading