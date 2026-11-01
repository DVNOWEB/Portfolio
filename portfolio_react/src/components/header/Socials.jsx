import { useEffect, useRef } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaCodepen, FaGithub, FaGlobe} from 'react-icons/fa'
import LangSelector from '../LangSelector'

const Socials = () => {
  const socialsRef = useRef(null)

  useEffect(() => {
    const socials = socialsRef.current
    const services = document.getElementById('services')
    const mobile = window.matchMedia('(max-width: 598px)')
    let frame = 0

    const updatePosition = () => {
      frame = 0
      if (!mobile.matches) {
        socials.style.removeProperty('--socials-top')
        return
      }

      // Keep the rail above Services when it reaches the sticky boundary.
      const top = Math.min(
        window.innerHeight * 0.05,
        services.getBoundingClientRect().top - socials.offsetHeight - 16
      )
      socials.style.setProperty('--socials-top', `${top}px`)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updatePosition)
    }

    const observer = new ResizeObserver(scheduleUpdate)
    observer.observe(document.documentElement)
    observer.observe(socials)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    mobile.addEventListener('change', scheduleUpdate)
    updatePosition()

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      mobile.removeEventListener('change', scheduleUpdate)
      socials.style.removeProperty('--socials-top')
    }
  }, [])

  return (
    <div className="header__socials" ref={socialsRef}>
      <LangSelector />
      <a
        href="https://www.linkedin.com/in/dano-zaganjor"
        aria-label="Open LinkedIn profile"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://codepen.io/DVNO"
        aria-label="Open CodePen profile"
        target="_blank"
        rel="noreferrer">
        <FaCodepen />
      </a>
      <a
        href="https://github.com/DVNOWEB"
        aria-label="Open GitHub profile"
        target="_blank"
        rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://dvnoweb.com"
        aria-label="Open DVNOWEB website"
        target="_blank"
        rel="noreferrer">
        <FaGlobe />
      </a>
    </div>
  )
}

export default Socials