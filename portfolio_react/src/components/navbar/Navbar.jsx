import './Navbar.css'

import { SiUpwork } from 'react-icons/si'
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
        aria-label="Go to top section"
        aria-current={activeNav === '#' ? 'page' : undefined}
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
        <SiUpwork />
      </a>
      <a
        href="#about"
        aria-label="Go to about section"
        aria-current={activeNav === '#about' ? 'page' : undefined}
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <span className='about_span'>
          ME
        </span>
      </a>
      <a
        href="#skills"
        aria-label="Go to skills section"
        aria-current={activeNav === '#skills' ? 'page' : undefined}
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}>
        <FaCode />
      </a>
      <a
        href="#portfolio"
        aria-label="Go to portfolio section"
        aria-current={activeNav === '#portfolio' ? 'page' : undefined}
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiMacbookLine />
      </a>
      <a
        href="#contact"
        aria-label="Go to contact section"
        aria-current={activeNav === '#contact' ? 'page' : undefined}
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <SiMinutemailer />
      </a>
    </nav>
  )
}

export default Navbar
