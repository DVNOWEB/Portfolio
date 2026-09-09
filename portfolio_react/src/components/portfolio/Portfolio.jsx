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
    titleKey: 'projects.jobaxs.title',
    descriptionKey: 'projects.jobaxs.description',
    actions: [
      {
        labelKey: 'projectLiveDemo',
        href: 'https://ai-jobbcoach-eight.vercel.app/sv',
        variant: 'primary',
      },
    ],
  },
  {
    id: 2,
    image: IMG5,
    titleKey: 'projects.prisento.title',
    descriptionKey: 'projects.prisento.description',
    actions: [
      {
        labelKey: 'projectIos',
        href: 'https://apps.apple.com/se/app/prisento/id6759288718',
      },
      {
        labelKey: 'projectAndroid',
        href: 'https://play.google.com/store/apps/details?id=com.prisento.app',
        variant: 'primary',
      },
    ],
  },
  {
    id: 3,
    image: IMG6,
    titleKey: 'projects.eventBooking.title',
    descriptionKey: 'projects.eventBooking.description',
    actions: [
      {
        labelKey: 'projectGithub',
        href: 'https://github.com/DVNOWEB',
      },
      {
        labelKey: 'projectLiveDemo',
        href: 'https://youtu.be/CaN9S1Iy5i8',
        variant: 'primary',
      },
    ],
  },
  {
    id: 4,
    image: IMG4,
    titleKey: 'projects.coworking.title',
    descriptionKey: 'projects.coworking.description',
    actions: [
      {
        labelKey: 'projectGithub',
        href: 'https://github.com/DVNOWEB/co_working',
      },
      {
        labelKey: 'projectLiveDemo',
        href: 'https://www.youtube.com/watch?v=LJeURc3BPMA&t=68s',
        variant: 'primary',
      },
    ],
  },
  {
    id: 5,
    image: IMG1,
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    actions: [
      {
        labelKey: 'projectGithub',
        href: 'https://github.com/DVNOWEB/Portfolio.git',
      },
      {
        labelKey: 'projectLiveDemo',
        href: 'https://danozaganjor.com/#webdeveloper',
        variant: 'primary',
      },
    ],
  },
  {
    id: 6,
    image: IMG2,
    titleKey: 'projects.shoppingCart.title',
    descriptionKey: 'projects.shoppingCart.description',
    actions: [
      {
        labelKey: 'projectGithub',
        href: 'https://github.com/DVNOWEB/webshop_project',
      },
      {
        labelKey: 'projectLiveDemo',
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
        {projectData.map(({ id, image, titleKey, descriptionKey, actions }) => {
          const title = t(titleKey)
          const description = t(descriptionKey)
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
                {actions.map(({ labelKey, href, variant, disabled }) => {
                  const className = variant === 'primary' ? 'btn btn-primary' : 'btn'
                  const label = t(labelKey)

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
