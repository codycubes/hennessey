import React from "react";

const Footer = () => {
  return <div>
    <footer className="bg-[#D9D9D9] p-4 w-1280  py-0">
        <div className="flex items-center justify-between py-8 px-8 text-black">

          <ul className="flex items-center gap-4 py-2 mx-auto ">
            <li className="px-4 ">
              <a href="#"></a>
            </li>
            <li className="px-4">
              <a href="#"></a>
            </li>
          </ul>
       
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a href="https://www.facebook.com" className="text-white">
            <FaFacebook className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.twitter.com" className="text-white">
            <FaTwitter className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.instagram.com" className="text-white">
            <FaInstagram className="w-6 h-6 mx-3" />
          </a>
          <a href="https://www.linkedin.com" className="text-white">
            <FaLinkedin className="w-6 h-6 mx-3" />
          </a>
        </span>
      </div>
    </footer>
  </div>;
};

export default Footer;
