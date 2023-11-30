import './Contact.css'
import { FaSms } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_c99j98r',
        'template_sfp6kei',
        form.current,
        '6SVU-ZbhUGXaEhzE4'
      )
      e.target.reset()
  }

  return (
    <section id="contact">
      <span className="header_span">Get in touch with me</span>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaSms className="contact__option-icon" />
            <h4>SMS</h4>
            <a href="sms:+46707684648">Send SMS</a>
          </article>

          <article className="contact__option">
            <FaPhoneVolume className="contact__option-icon" />
            <h4>Phone</h4>
            <a href="tel:+46707684648">Call me</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/0046707684648">Call me or send me an SMS</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact