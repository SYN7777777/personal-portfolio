import React from 'react';
import { TbBrandJavascript } from "react-icons/tb";
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='px-4 md:mb-20 mb-8 lg:px-24 flex items-center justify-between md:py-8 py-5'>
      <div className='flex items-center'>
        <a href="#home" className='text-xl sm:text-2xl text-cyan-50 font-medium'>
          Suthakar
        </a>
        <TbBrandJavascript className='text-cyan-50 ml-2' />
      </div>
      <div className='flex gap-3 sm:gap-4 text-white'>
        <a 
          href="https://www.instagram.com/alien_tribe07" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className='text-lg sm:text-2xl' />
        </a>
        <a 
          href="https://github.com/SYN7777777" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className='text-lg sm:text-2xl' />
        </a>
        <a 
          href="https://wa.me/+919344813787" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className='text-lg sm:text-2xl' />
        </a>
        <a 
          href="https://www.linkedin.com/in/suthakar08" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className='text-lg sm:text-2xl' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
