import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/images/pf1.png'
import IMG2 from '../../assets/images/pf2.png'
import IMG3 from '../../assets/images/pf3.png'
import IMG4 from '../../assets/images/pf4.png'
import IMG5 from '../../assets/images/pf5.png'
import IMG6 from '../../assets/images/pf6.png'

// Array with data for the projects
const projectData = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio React JS',
    github: 'https://github.com/DVNOWEB/portfolio_react.git',
    demo: 'https://youtu.be/ixi92hXmYOo',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sign Up Form',
    github: 'https://github.com/DVNOWEB/Sign_Up_Form.git',
    demo: 'https://codepen.io/DVNO/pen/RweRGKM',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Task list',
    github: 'https://github.com/DVNOWEB/TaskList7.git',
    demo: 'https://codepen.io/DVNO/pen/VwBxvmo',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Fullstack Project ',
    github: 'https://github.com/DVNOWEB/BlackEnd_project.git',
    demo: 'https://youtu.be/uS2JnApRFHw',
  },
  {
    id: 5,
    image: IMG5,
    title: 'ChatOn',
    github: 'https://github.com/DVNOWEB/Chatrooms.git',
    demo: 'https://youtu.be/IYfOzZRVQqU',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Web Chat',
    github: 'https://github.com/DVNOWEB/Chat.git',
    demo: 'https://youtu.be/HIHfGHOA0aQ',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <span className="header_span">My latest work</span>
      <h2>Project</h2>

      <div className="container portfolio__container">
        {projectData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
