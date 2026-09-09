import {BsLinkedin} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import LangSelector from '../LangSelector'

const Socials = () => {
  return (
    <div className="header__socials">
      <LangSelector />
      <a
        href="https://www.linkedin.com/in/dano-zaganjor"
        aria-label="Open LinkedIn profile"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://codepen.io/DVNO"
        aria-label="Open CodePen profile"
        target="_blank"
        rel="noreferrer">
        <FaCodepen />
      </a>
      <a
        href="https://github.com/DVNOWEB"
        aria-label="Open GitHub profile"
        target="_blank"
        rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  )
}

export default Socials