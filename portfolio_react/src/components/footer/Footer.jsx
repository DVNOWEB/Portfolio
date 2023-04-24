import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaCodepen, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <a href="#webdeveloper" className="scroll__up">
          Scroll up
        </a>

        <ul className="permalinks">
          <li>
            <a href="#webdeveloper">Top</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Project</a>
          </li>
          <li>
            <a href="#testimonials">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/dano-zaganjor"
            target="_blank"
            rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://codepen.io/DVNO" target="_blank" rel="noreferrer">
            <FaCodepen />
          </a>
          <a href="https://github.com/DVNOWEB" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; D&#581;NO Z&#581;G&#581;NJOR All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
