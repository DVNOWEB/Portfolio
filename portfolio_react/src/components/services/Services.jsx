import './Services.css'
import { BsCheck2Circle } from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <p className="container header_p">
        I offer a range of dynamic services including web development, design,
        consultation, and technical support. Whether you`re looking to build a
        brand new website from the ground up or elevate an existing one, I have
        the expertise to craft a customized solution tailored to your unique
        needs. From brainstorming cutting-edge design concepts to implementing
        the latest web technologies, I`m dedicated to bringing your vision to
        life. With a keen focus on detail and a passion for delivering
        unparalleled results, I`m committed to exceeding your expectations every
        step of the way.
        <br />
        <br />
        No matter the challenge, I`m here to help you achieve your goals and
        take your online presence to the next level. Let`s work together to
        create a digital masterpiece that sets you apart from the competition.
      </p>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__header">
            <h3>Frontend development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Expert in crafting websites with HTML and CSS, focusing on
                responsive design and basic SEO to ensure optimal performance
                and visibility across all devices.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Skilled in enhancing website aesthetics and functionality using
                Sass. Experienced in implementing JavaScript for dynamic and
                interactive web elements, ensuring robust testing and
                compatibility.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Proficient in using React to build scalable web applications and
                React Native for crafting cross-platform mobile apps, focusing
                on optimal user experience and performance.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Familiar with TypeScript for adding strong typing to JavaScript,
                enhancing code quality and maintainability. Basic knowledge of
                NextJS for improving web application performance through
                server-side rendering.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Competent in UI/UX design, utilizing tools like Figma to
                prototype and create user-centric designs that are both
                appealing and functional, ensuring a seamless user interface.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
                Highly skilled in using WordPress to develop custom websites
                tailored to specific client needs, incorporating various plugins
                and themes. Proficient in applying Scrum techniques to
                streamline project processes and enhance team collaboration.
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
              I have experience with multiple project methodologies, including Agile, Scrum, Kanban, and traditional models. My diverse background helps me understand and adapt to each method&apos;s unique demands. I am proficient with development tools, version control, and prioritizing test-driven development to ensure quality in every project.
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
              With a strong foundation in UX design principles, usability, behavioral science, and communication theory, I deeply understand target audiences and their needs. This expertise allows me to develop user-centered websites that cater effectively to all user groups.
              </p>
            </li>
            <li>
              <BsCheck2Circle className="service_list-icon" />
              <p>
              I have extensive experience in UI design, employing various techniques and tools to craft efficient interfaces. My approach includes using atomic design principles to build scalable and maintainable design systems, ensuring consistency and quality across web applications.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
