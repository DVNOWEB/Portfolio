import React from 'react'
import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/images/pf2.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header id="webdeveloper">
      <div className="container header__container">
        <span className="header_span">Innovative Web Design by</span>
        <h1>D&#581;NO Z&#581;G&#581;NJOR</h1>
        <span>FrontEnd Web Developer</span>
        <span className="header_span">
          Creating Engaging Digital Experiences
        </span>
        <br />
        <p>
          As a passionate frontend web developer with a keen eye for both
          aesthetics and functionality, I am dedicated to creating intuitive and
          user-friendly interfaces. My creativity and technical expertise enable
          me to translate clients' needs into visually appealing and functional
          designs.
        </p>
        <CTA />
        <Socials />

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  )
}

export default Header