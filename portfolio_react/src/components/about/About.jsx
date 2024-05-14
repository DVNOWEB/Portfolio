import './About.css'
import ME from '../../assets/images/d1.jpg'
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
              <h5>Education and Experience</h5>
              <small>
                KYH University of Applied Sciences
                <br />
                Stockholm
              </small>
              <h6>Frontend developer</h6>
              <br />
              <small>
                DVNOWEB WEB AGENCY
                <br />
                Stockholm
              </small>
              <h6>CEO / founder</h6>
              <small>since 2019</small>
              <br />
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Global Clientele</h5>
              <small>Serving over 20 clients worldwide</small>
              <article className="about__card">
                <AiOutlineFundProjectionScreen className="about__icon" />
                <h5>Diverse Projects</h5>
                <small>Successfully completed 20+ projects</small>
              </article>
            </article>
          </div>

          <p>
          I am a driven and ambitious professional, committed to excellence in everything I do. With a keen eye for detail, I stay at the forefront of industry trends to provide cutting-edge solutions.
          </p>
          <p>
            My strong communication skills and natural ability to collaborate
            make me a quick learner and a versatile team member. I am deeply
            motivated by the pursuit of continual improvement and am eager to
            bring my enthusiasm and expertise to your team. I look forward to
            tackling new challenges and infusing every project with my unique
            flair.
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
