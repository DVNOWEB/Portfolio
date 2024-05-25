import { useTranslation } from 'react-i18next'
import './Services.css'
import { BsCheck2Circle } from 'react-icons/bs'

const Services = () => {
  const { t } = useTranslation()
  return (
    <section id="services">
      <p className="container header_p">
        {t('servicesP1')}
        <br />
        <br />
        {t('servicesP2')}
      </p>
      <h2>{t('servicesH2')}</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>{t('servicesH3')}</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP1')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP2')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP3')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP4')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP5')}</p>
            </li>
          </ul>
        </article>

        {/* Second box */}
        <article className="service">
          <div className="service__header">
            <h3>{t('servicesH3one')}</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP6')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP7')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP8')}</p>
            </li>
          </ul>
        </article>

        {/* Third box */}
        <article className="service">
          <div className="service__header">
            <h3>{t('servicesH3two')}</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP9')}</p>
            </li>
          </ul>
        </article>

        {/* Fourth box */}
        <article className="service">
          <div className="service__header">
            <h3>UI & UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP10')}</p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>{t('listP11')}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
