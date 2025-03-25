import './Portfolio.css'
import IMG1 from '../../assets/images/pf1.png'
import IMG2 from '../../assets/images/pf2.png'
import IMG3 from '../../assets/images/pf3.png'
import IMG4 from '../../assets/images/pf4.png'
import IMG5 from '../../assets/images/pf5.png'
import IMG6 from '../../assets/images/pf6.png'
import { useTranslation } from 'react-i18next'

// Array with data for the projects
const projectData = [
  {
    id: 1,
    image: IMG6,
    title: 'NextJS Full Stack Event Booking app',
    description: 'NextJS, TypeScript, Convex, Stripe, Clerk, Tailwind CSS',
    github: 'https://github.com/DVNOWEB/Chat.git',
    demo: 'https://github.com/DVNOWEB',
  },
  {
    id: 2,
    image: IMG4,
    title: 'Co-Working Booking',
    description:
      'Full Stack built with Next.js 14, React, Tailwind CSS, Prisma, MongoDB, and NextAuth',
    github: 'https://github.com/DVNOWEB/co_working',
    demo: 'https://www.youtube.com/watch?v=LJeURc3BPMA&t=68s',
  },
  {
    id: 3,
    image: IMG1,
    title: 'My Portfolio React JS',
    description:
      'Minimal Portfolio page created with React and JavaScript and CSS',
    github: 'https://github.com/DVNOWEB/Portfolio.git',
    demo: 'https://danozaganjor.com/#webdeveloper',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Task list',
    description: 'Created in JavaScript, HTML and Materialize CSS',
    github: 'https://github.com/DVNOWEB/TaskList7.git',
    demo: 'https://codepen.io/DVNO/pen/VwBxvmo',
  },
  {
    id: 5,
    image: IMG5,
    title: 'ChatOn',
    description: 'Chat rooms created with NodeJS, Express, Socket.io',
    github: 'https://github.com/DVNOWEB/Chatrooms.git',
    demo: 'https://youtu.be/IYfOzZRVQqU',
  },
  {
    id: 6,
    image: IMG2,
    title: 'Shoping Cart',
    description:
      'This project is a basic shopping cart built with React JS, TypeScript and Context',
    github: 'https://github.com/DVNOWEB/webshop_project',
    demo: 'https://youtu.be/AJE2hXOU41w',
  },
]
const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <section id="portfolio">
      <span className="header_span">{t('portfolioSpan')}</span>
      <h2>{t('portfolioH2')}</h2>

      <div className="container portfolio__container">
        {projectData.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div
                className="portfolio__item-image"
                onClick={() => window.open(demo, '_blank')}>
                <a href={demo} target="_blank" rel="noreferrer">
                  <img src={image} alt={title} />
                </a>

                <h3>{title}</h3>
                <p className="p_description">{description}</p>
              </div>

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
