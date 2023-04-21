import React from 'react'
import './Services.css'
import { BsCheck2Circle } from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <p className="container header_p">
        I offer a range of dynamic services including web development, design,
        consultation, and technical support. Whether you're looking to build a
        brand new website from the ground up or elevate an existing one, I have
        the expertise to craft a customized solution tailored to your unique
        needs. From brainstorming cutting-edge design concepts to implementing
        the latest web technologies, I'm dedicated to bringing your vision to
        life. With a keen focus on detail and a passion for delivering
        unparalleled results, I'm committed to exceeding your expectations every
        step of the way.
        <br />
        <br />
        No matter the challenge, I'm here to help you achieve your goals and
        take your online presence to the next level. Let's work together to
        create a digital masterpiece that sets you apart from the competition.
      </p>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>FrontEnd web devolopment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Skilled in developing websites using HTML and CSS, including
                responsive design and basic SEO/search engine optimization.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Customization of websites for accessibility and familiarity with
                various CSS frameworks such as SASS, Bootstrap, and Materialize.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Knowledge of web standards and ability to implement ready-made
                JavaScript code and perform testing of web solutions for
                HTML/CSS.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Experience working with frontend frameworks such as React and
                Vue to create scalable web applications, and using Typescript to
                write secure and maintainable code.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Proficient in creating web pages using WordPress and its plugins
                to build custom websites according to the client's requirements.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Experience working with UI/UX design programs such as Figma and
                Adobe XD to create engaging and user-friendly interfaces.
              </p>
            </li>
          </ul>
        </article>

        {/* Second box */}
        <article className="service">
          <div className="service__header">
            <h3>BackEnd web devolopment</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I am familiar with NodeJS, which enables running JavaScript
                outside of the browser.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Knowledgeable in NoSQL databases that store data in JSON-like
                format and able to use NodeJS and MongoDB together to develop
                scalable web applications and APIs.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I understand how to build REST APIs with Express, which means
                that I can create simple and consistent interfaces for
                interacting with your databases.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I understand how to use Electron to create desktop applications
                that work on Windows, MacOS, and Linux.
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
                As a project member, I have worked with various methodologies
                including agile, Scrum, Kanban, and non-agile models. Through my
                experiences, I have gained insight into the benefits and
                challenges of each method and can adapt my work accordingly.
                <br />
                Additionally, I have expertise in handling development tools and
                version control, as well as efficiently gathering and setting
                requirements. Test-driven development is a vital part of my
                methodology to maintain high quality.
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
                With my solid knowledge in UX design, usability, behavioral
                science, and communication theory, I have a deep understanding
                of target audiences and their needs. This enables me to create
                user-centered websites that effectively support all user groups.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                I also have extensive experience in using various techniques and
                tools to create efficient UI designs, which allows me to
                implement these design concepts effectively in web applications.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
