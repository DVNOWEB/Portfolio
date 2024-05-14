import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/images/pf2.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header id="webdeveloper">
      <div className="container header__container">
        <div className='header_box'>
        <span className="header_span">Innovative Web Design by</span>
        <h1>D&#581;NO Z&#581;G&#581;NJOR</h1>
        <span>Frontend Developer</span>
        <span className="header_span">
        Creating Intuitive and Responsive User Interfaces
        </span>
        <br />
        <p>
        With a strong passion for frontend development, I excel at integrating design and functionality to develop user-friendly interfaces. My commitment and creativity allow me to effectively transform client visions into practical and attractive designs.
        </p>
        <CTA />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
      <Socials />
    </header>
  )
}

export default Header