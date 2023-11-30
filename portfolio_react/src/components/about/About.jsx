import './About.css'
import ME from '../../assets/images/DZ.png'
import { GiNetworkBars } from 'react-icons/gi'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <span className="header_span">About me</span>
      <h2>My story</h2>

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
              <h5>Experience</h5>
              <small>2+ years of study experience</small>
              <br />
              <small>3+ years self-employed</small>
              <br />
              <small>28+ years of work experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Customers</h5>
              <small>20+ Worldwide</small>
              <article className="about__card">
                <AiOutlineFundProjectionScreen className="about__icon" />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </article>
          </div>

          <p>
            I am a driven and ambitious individual who always strives to do my
            best. I have an eye for detail and keep up-to-date with the latest
            trends in my industry.
            <br />
            <br />
            My natural ability to communicate and collaborate makes me a quick
            learner and flexible team player. Moreover, I am motivated by
            continuous improvement and hope to contribute to your team with my
            enthusiasm and skills while continuing to grow both personally and
            professionally. I am excited to take on new challenges and bring my
            unique flair to every project.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let`s talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
