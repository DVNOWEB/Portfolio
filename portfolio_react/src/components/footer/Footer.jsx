import { useTranslation } from 'react-i18next'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaCodepen, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <div className="container footer__container">
        <a href="#webdeveloper" className="scroll__up">
          {t('footerA1')}
        </a>

        <ul className="permalinks">
          <li>
            <a href="#webdeveloper">
              {t('footerA2')}
            </a>
          </li>
          <li>
            <a href="#about">
              {t('footerA3')}
            </a>
          </li>
          <li>
            <a href="#skills">
              {t('footerA4')}
            </a>
          </li>
          <li>
            <a href="#services">
              {t('footerA5')}
            </a>
          </li>
          <li>
            <a href="#portfolio">
              {t('footerA6')}
            </a>
          </li>
          <li>
            <a href="#testimonials">
              {t('footerA7')}
            </a>
          </li>
          <li>
            <a href="#contact">
              {t('footerA8')}
            </a>
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
        <small>&copy; D&#581;NO Z&#581;G&#581;NJOR{' '}
          {t('footerCopy')}
        </small>
      </div>
    </footer>
  )
}

export default Footer
