import './Portfolio.css'
import { useTranslation } from 'react-i18next'

const baseUrl = import.meta.env.BASE_URL
const IMG1 = `${baseUrl}images/pf1.png`
const IMG2 = `${baseUrl}images/pf2.png`
const IMG3 = `${baseUrl}images/pf3.jpeg`
const IMG4 = `${baseUrl}images/pf4.png`
const IMG5 = `${baseUrl}images/pf5.jpeg`
const IMG6 = `${baseUrl}images/pf6.png`

// Array with data for the projects
const projectData = [
  {
    id: 1,
    image: IMG3,
    title: 'JobAXS',
    description: 'Recruitment and job platform built as a modern web application',
    actions: [
      {
        label: 'Live Demo',
        href: 'https://ai-jobbcoach-eight.vercel.app/sv',
        variant: 'primary',
      },
    ],
  },
  {
    id: 2,
    image: IMG5,
    title: 'Prisento App',
    description: 'Mobile app available for both iOS and Android',
    actions: [
      {
        label: 'iOS',
        href: 'https://apps.apple.com/se/app/prisento/id6759288718',
      },
      {
        label: 'Android',
        href: 'https://play.google.com/store/apps/details?id=com.prisento.app',
        variant: 'primary',
      },
    ],
  },
  {
    id: 3,
    image: IMG6,
    title: 'Next.js Full-Stack Event Booking App',
    description: 'Next.js, TypeScript, Convex, Stripe, Clerk, Tailwind CSS',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/DVNOWEB',
      },
      {
        label: 'Live Demo',
        href: 'https://youtu.be/CaN9S1Iy5i8',
        variant: 'primary',
      },
    ],
  },
  {
    id: 4,
    image: IMG4,
    title: 'Co-working Booking',
    description:
      'Full-stack project built with Next.js 14, React, Tailwind CSS, Prisma, MongoDB, and NextAuth',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/DVNOWEB/co_working',
      },
      {
        label: 'Live Demo',
        href: 'https://www.youtube.com/watch?v=LJeURc3BPMA&t=68s',
        variant: 'primary',
      },
    ],
  },
  {
    id: 5,
    image: IMG1,
    title: 'My React Portfolio',
    description: 'A minimalist portfolio built with React, JavaScript, and CSS',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/DVNOWEB/Portfolio.git',
      },
      {
        label: 'Live Demo',
        href: 'https://danozaganjor.com/#webdeveloper',
        variant: 'primary',
      },
    ],
  },
  {
    id: 6,
    image: IMG2,
    title: 'Shopping Cart',
    description:
      'This project is a basic shopping cart built with React, TypeScript, and the Context API',
    actions: [
      {
        label: 'GitHub',
        href: 'https://github.com/DVNOWEB/webshop_project',
      },
      {
        label: 'Live Demo',
        href: 'https://youtu.be/AJE2hXOU41w',
        variant: 'primary',
      },
    ],
  },
]
const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <section id="portfolio">
      <span className="header_span">{t('portfolioSpan')}</span>
      <h2>{t('portfolioH2')}</h2>

      <div className="container portfolio__container">
        {projectData.map(({ id, image, title, description, actions }) => {
          const previewLink = actions.find(({ href }) => href)?.href

          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                {previewLink ? (
                  <a href={previewLink} target="_blank" rel="noreferrer">
                    <img src={image} alt={title} />
                  </a>
                ) : (
                  <img src={image} alt={title} />
                )}

                <h3>{title}</h3>
                <p className="p_description">{description}</p>
              </div>

              <div className="portfolio__item-cta">
                {actions.map(({ label, href, variant, disabled }) => {
                  const className = variant === 'primary' ? 'btn btn-primary' : 'btn'

                  if (disabled) {
                    return (
                      <span key={label} className={`${className} btn-disabled`} aria-disabled="true">
                        {label}
                      </span>
                    )
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      className={className}
                      target="_blank"
                      rel="noreferrer">
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
