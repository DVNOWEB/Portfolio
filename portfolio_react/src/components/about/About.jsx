import './About.css'
import ME from '/images/d2.jpg'
import { GiNetworkBars } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about">
      <span className="header_span">{t('aboutSpan')}</span>
      <h2>{t('aboutH2')}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="min profil bild" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiNetworkBars className="about__icon" />
              <h5>{t('aboutH5')}</h5>
              <small>
                {t('aboutSmall')}
                <br />
                Stockholm
              </small>
              <h6>{t('aboutH6')}</h6>
              <br />
              <small>
                {t('aboutSmall1')}
                <br />
                Stockholm
              </small>
              <h6>{t('aboutH6one')}</h6>
              <small>{t('aboutSmall2')}</small>
              <br />
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>{t('aboutH5one')}</h5>
              <small>{t('aboutSmall3')}</small>
              <article className="about__card">
                <AiOutlineFundProjectionScreen className="about__icon" />
                <h5>{t('aboutH5two')}</h5>
                <small>{t('aboutSmall4')}</small>
              </article>
            </article>
          </div>

          <p>{t('aboutP1')}</p>
          <p>{t('aboutP2')}</p>

          <a href="#contact" className="btn btn-primary">
            {t('aboutBtn')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
