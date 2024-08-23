import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return <div>
    <footer className="p-[500px] w-1280 h-[80px] py-0">
     
        <div className="inline-flex justify-start items-center w-100 py-8 px-8 text-white">
       {/* <p> © 2024 HENNESSY</p> */}
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
            </footer>
        <div className="flex items-center w-100 justify-between py-8 px-8 text- ">
          <ul className="flex items-center gap-4 py-2 mx-auto ">
            <li className="px-4 ">
               <a href="#">CONTACT US </a>
            </li>
            <li className="px-4">
              <a href="#">FAQs</a>
          </li>
          <li className="px-4">
              <a href="#">INFORMATION NOTE AND COOKIES</a>
          </li>
          <li className="px-4">
              <a href="#">GENERAL CONDITIONS OF USE</a>
          </li>
          <li className="px-4">
              <a href="#">Cookie settings</a>
            </li>
          </ul>
       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.facebook.com" className="text-white">
          <FaFacebook className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.instagram.com" className="text-white">
            <FaInstagram className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.linkedin.com" className="text-white">
            <FaLinkedin className="w-6 h-6 mx-3" />
          </a>
          </span> 
          </div>
      </div>

  ;
};

export default Footer;
