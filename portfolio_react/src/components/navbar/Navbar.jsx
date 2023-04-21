import React from 'react'
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { RiFileUserLine } from 'react-icons/ri'
import { BiBook } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
  // Fix the active nav
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* Activ nav fix */}
      <a
        href="#header"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <RiFileUserLine />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}>
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <FaLaptopCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <AiOutlineMail />
      </a>
    </nav>
  )
}

export default Navbar
