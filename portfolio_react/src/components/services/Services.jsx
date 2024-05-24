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
              <p>
                {t('listP')}
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                {t('listP1')}
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                {t('listP2')}
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                {t('listP3')}
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                {t('listP4')}
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                {t('listP5')}
              </p>
            </li>
          </ul>
        </article>

        {/* Second box */}
        <article className="service">
          <div className="service__header">
            <h3>Backend development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Skilled in utilizing NodeJS to run JavaScript outside of a
                traditional browser environment, enabling the development of
                scalable and efficient server-side applications.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Knowledgeable in NoSQL database technologies, especially
                MongoDB. Experienced in designing and implementing database
                solutions that store and manage data efficiently in a JSON-like
                format, optimizing data retrieval and scalability.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Proficient in using Express to build robust REST APIs,
                facilitating seamless interactions between client-side and
                server-side technologies. Skilled in creating consistent and
                straightforward API endpoints that enhance the functionality of
                web applications.
              </p>
            </li>
          </ul>
        </article>

        {/* Third box */}
        <article className="service">
          <div className="service__header">
            <h3>Work methodology</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I have experience with multiple project methodologies, including
                Agile, Scrum, Kanban, and traditional models. My diverse
                background helps me understand and adapt to each method&apos;s
                unique demands. I am proficient with development tools, version
                control, and prioritizing test-driven development to ensure
                quality in every project.
              </p>
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
              <p>
                With a strong foundation in UX design principles, usability,
                behavioral science, and communication theory, I deeply
                understand target audiences and their needs. This expertise
                allows me to develop user-centered websites that cater
                effectively to all user groups.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I have extensive experience in UI design, employing various
                techniques and tools to craft efficient interfaces. My approach
                includes using atomic design principles to build scalable and
                maintainable design systems, ensuring consistency and quality
                across web applications.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
