import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { useTranslation } from 'react-i18next'

const baseUrl = import.meta.env.BASE_URL
const AVT1 = `${baseUrl}images/av1.jpg`
const AVT2 = `${baseUrl}images/av2.jpg`
const AVT3 = `${baseUrl}images/av3.jpg`
const AVT4 = `${baseUrl}images/av4.jpg`

const avatars = {
  AVT1,
  AVT2,
  AVT3,
  AVT4,
}

// const userTestimonials = [
//   {
//     avatar: AVT1,
//     title: 'CEO VAconsulting',
//     name: 'Vladan Andric',
//     review:
//       "DVNOWEB AB is a responsive, knowledgeable and thoroughly professional company. They built a super nice site for my company VAconsulting. They take care of everything, which is nice because you don't really have that time for small business owners. They are also well-read and creative about new solutions to stand out a little.",
//   },
//   {
//     avatar: AVT2,
//     title: 'CEO Hår3000',
//     name: 'Gabriel Pulgu',
//     review:
//       'Responsive and very professional, they have made our website twice to our satisfaction. Now they have received a new project to build our new webshop, so far I am more than satisfied. I can highly recommend them.',
//   },
//   {
//     avatar: AVT3,
//     name: 'Lorem Ipsum',
//     review:
//       'Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
//   },
//   {
//     avatar: AVT4,
//     name: 'John Doe',
//     review:
//       'John Doe, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
//   },
// ]

const Testimonials = () => {
  const { t, i18n } = useTranslation()
  const testimonials = i18n.getResourceBundle(
    i18n.language,
    'translation'
  ).testimonials

  return (
    <section id="testimonials">
      <span className="header_span">{t('testimonialsSpan')}</span>
      <h2>{t('testimonialsH2')}</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {testimonials.map(({ avatar, title, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className='client__avatar' key={index}>
                <img src={avatars[avatar]} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <span>{title}</span>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
