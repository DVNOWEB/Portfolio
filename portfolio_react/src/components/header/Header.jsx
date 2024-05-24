import './Header.css'
import CTA from './CTA'
// import ME from '../../assets/images/pf2.jpg'
import Socials from './Socials'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  return (
    <header id="webdeveloper">
      <div className="container header__container">
        <div className="header_box">
          <span className="header_span">{t('headerSpan')}</span>
          <h1>D&#581;NO Z&#581;G&#581;NJOR</h1>
          <span>{t('headerSpan1')}</span>
          <span className="header_span">{t('headerSpan2')}</span>
          <br />
          <p>{t('headerP')}</p>
          <CTA />
        </div>

        <a href="#contact" className="scroll__down">
          {t('scrollDown')}
        </a>
      </div>
      <Socials />
    </header>
  )
}

export default Header
