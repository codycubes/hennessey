import React from 'react'
import {logo} from '../../../public/products/logo-hennessy.jpg'
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const NavBar = () => {
  return (
    <div >
      <header className="p-[500px] w-1280 h-[100px] py-0">
     
        <div className="inline-flex  justify-start items-center w-100 py-8 px-8 text-white">
      <div className='hidden lg:flex text-3xl items-center'
          >
            <img src={logo}></img>
          </div>
          <ul className="flex items-center gap-4 py-2 mx-auto ">
            <li className="px-10 ">
              <a href="#"> HOME</a>
            </li>
            <li className="px-10">
              <a href="#">COLLECTION</a>
          </li>
          <li className="px-10">
              <a href="#">ABOUT</a>
          </li>
          <li className="px-10">
              <a href="#">TESTIMONIAL</a>
          </li>
          <li className="px-10">
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <span className="flex sm:ml-auto pl-[300px] sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.maps.google.com" className="text-">
          <FaLocationDot className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.mail.google.com" className="text-white">
            <FaEnvelope  className="w-6 h-6 mx-3" />
           </a>
        </span> 
        </div>
     </header >
     
      
      </div> 
  )
}

export default NavBar