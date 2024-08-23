import React from 'react'

const NavBar = () => {
  return (
    <div >
      <header className="p-[500px] w-1280 h-[100px] py-0">
     
        <div className="inline-flex  justify-start items-center w-100 py-8 px-8 text-black">
      <div className='hidden lg:flex text-3xl items-center'
          >
            <img src="/public/products/logo-hennessy.jpg"></img>
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
        </div>
      </header>
     <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.facebook.com" className="text-black">
          <FaFacebook className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.instagram.com" className="text-black">
            <FaInstagram className="w-6 h-6 mx-3" />
           </a>
          </span> </div>
  )
}

export default NavBar