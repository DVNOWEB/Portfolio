import {BsLinkedin} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="header__socials">
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
  )
}

export default Socials