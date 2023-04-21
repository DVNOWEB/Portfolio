import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/images/av1.jpg'
import AVT2 from '../../assets/images/av2.jpg'
import AVT3 from '../../assets/images/av3.jpg'
import AVT4 from '../../assets/images/av4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const userTestimonials = [
  {
    avatar: AVT1,
    name: 'Lorem Ipsum',
    review:
      'Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
  },
  {
    avatar: AVT2,
    name: 'John Doe',
    review:
      'John Doe, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
  },
  {
    avatar: AVT3,
    name: 'Lorem Ipsum',
    review:
      'Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
  },
  {
    avatar: AVT4,
    name: 'John Doe',
    review:
      'John Doe, dolor sit amet consectetur adipisicing elit. Delectus soluta placeat necessitatibus esse corporis nostrum perferendis vitae dolorum expedita provident.',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <span className="header_span">What people say about me</span>
      <h2>Reviews</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {userTestimonials.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>

              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials