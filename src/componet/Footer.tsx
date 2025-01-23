import React from 'react'
import { FacebookIcon, Globe, InstagramIcon, TwitterIcon } from 'lucide-react'
import eroup from './icons/£.svg'


function Footer() {
  return (
    <>
       <div className='px-12'>
         <footer className="footer  ">
            <nav>
             <p className="footer-title">Support</p>
              <a className="link link-hover">Help center</a>
              <a className="link link-hover">AirCover</a>
              <a className="link link-hover">Anti-discrimination</a>
              <a className="link link-hover">Disability support</a>
              <a className="link link-hover">Cancellation options</a>
              <a className="link link-hover">Report neighbourhood concern</a>
           </nav> 
           <nav>
             <p className="footer-title">Hosting</p>
                <a className="link link-hover">Airbnb your home</a>
                <a className="link link-hover">AirCover for hosts</a>
                <a className="link link-hover">Hosting resources</a>
                <a className="link link-hover">Community forum</a>
                <a className="link link-hover">Hosting responsibly</a>
           </nav>
           <nav>
             <p className="footer-title">Airbnb</p>
               <a className="link link-hover">Newsroom</a>
               <a className="link link-hover">New features</a>
               <a className="link link-hover">Careers</a>
               <a className="link link-hover">Investors</a>
               <a className="link link-hover">Gift cards</a>
               <a className="link link-hover">Airbnb.org emergency stays</a>
            </nav>
          </footer>
          <hr className='victor:pb-9'></hr>
          <footer className='flex flex-wrap flex-col-reverse victor:flex victor:flex-col-reverse victor:justify-between victor:pb-3 text-xs victor:text-2xl' >
          <div>
            <p className="text-sm text-neutral-400 pr-30">&copy; 2023 Airbnb, inc. .rivacy . Terms . Sitemap . UK modern Slavery Act . Company details 2023 Airbnb, Inc.</p>
          </div>
          <div className='flex victor:space-x-1'>
             <Globe className='w-3 victor:w-7' />
             <p className='text-xs victor:text-sm'>English (GB)</p>
              <img src={eroup} alt="" className='victor:w-3' />
              <p>GBP</p>
              <FacebookIcon className='w-4 victor:w-7'/>
              <TwitterIcon className='w-4 victor:w-7' />
              <InstagramIcon className='w-4 victor:w-7' />
          </div>
          </footer>
       </div>
    </>
  )
}

export default Footer