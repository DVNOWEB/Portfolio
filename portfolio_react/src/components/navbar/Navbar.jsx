import './Navbar.css'

import { SiUpwork } from 'react-icons/si'
import { SiAboutdotme } from 'react-icons/si'
import { RiMacbookLine } from 'react-icons/ri'
import { FaCode } from 'react-icons/fa6'
import { SiMinutemailer } from 'react-icons/si'
import { useState } from 'react'

const Navbar = () => {
  // Fix the active nav
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* Activ nav fix */}
      <a
        href="#webdeveloper"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <SiUpwork />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <SiAboutdotme />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}>
        <RiMacbookLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <FaCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <SiMinutemailer />
      </a>
    </nav>
  )
}

export default Navbar
