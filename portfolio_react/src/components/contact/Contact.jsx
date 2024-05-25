import './Contact.css'
import { FaSms, FaPhoneVolume } from 'react-icons/fa'
import { SiWhatsapp } from 'react-icons/si'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
const USER_ID = import.meta.env.VITE_REACT_APP_USER_ID

const Contact = () => {
  const { t } = useTranslation()
  const form = useRef()
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text)
        setMessage(t('contactAlertSuccess'))
        setTimeout(() => setMessage(''), 3000);
        form.current.reset() 
      },
      (error) => {
        console.log(error.text)
        setMessage(t('contactAlertError'))
        setTimeout(() => setMessage(''), 3000);
      }
    )
  }

  return (
    <section id="contact">
      <span className="header_span">{t('contactSpan')}</span>
      <h2>{t('contactH2')}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaSms className="contact__option-icon" />
            <h4>SMS</h4>
            <a href="sms:+46707684648">{t('contactA1')}</a>
          </article>

          <article className="contact__option">
            <FaPhoneVolume className="contact__option-icon" />
            <h4>{t('contactH4')}</h4>
            <a href="tel:+46707684648">{t('contactA2')}</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/0046707684648">{t('contactA3')}</a>
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
          {/* Display feedback message */}
          {message && <div className="feedback-message">{message}</div>}
        </form>
      </div>
    </section>
  )
}

export default Contact
