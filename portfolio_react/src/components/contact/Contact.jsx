import './Contact.css'
import { FaSms } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'



const Contact = () => {
  const { t } = useTranslation()
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
      <span className="header_span">
        {t('contactSpan')}
      </span>
      <h2>
        {t('contactH2')}
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaSms className="contact__option-icon" />
            <h4>SMS</h4>
            <a href="sms:+46707684648">
              {t('contactA1')}
            </a>
          </article>

          <article className="contact__option">
            <FaPhoneVolume className="contact__option-icon" />
            <h4>
              {t('contactH4')}
            </h4>
            <a href="tel:+46707684648">
              {t('contactA2')}
            </a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/0046707684648">
              {t('contactA3')}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t('contactInput1')}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t('contactInput2')}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t('contactInput3')}
            required></textarea>
          <button type="submit" className="btn btn-primary">
            {t('contactBtn')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact