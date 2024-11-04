import React from 'react'
import { TbBrandJavascript } from "react-icons/tb";
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='px-4 md:mb-20 mb-8 lg:px-24   flex items-center justify-between md:py-8 py-5'>
      <div className='flex items-center'>
        <p className='text-xl sm:text-2xl text-cyan-50 font-medium'>Suthakar</p>
        <TbBrandJavascript className='text-cyan-50 ml-2' />
      </div>
      <div className='flex gap-3 sm:gap-4 text-white'>
        <FaInstagram className='text-lg sm:text-2xl' />
        <FaGithub className='text-lg sm:text-2xl' />
        <FaWhatsapp className='text-lg sm:text-2xl' />
        <FaLinkedin className='text-lg sm:text-2xl' />
      </div>
    </div>
  )
}

export default Navbar
