import { useEffect, useMemo, useState } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const BACKGROUND_IMAGE = 'n1.jpg'

const App = () => {
  const baseUrl = import.meta.env.BASE_URL
  const background = useMemo(
    () => ({
      id: 'n1',
      url: `${baseUrl}images/${BACKGROUND_IMAGE}`,
    }),
    [baseUrl]
  )
  const [isBackgroundReady, setIsBackgroundReady] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.contrast = 'on-dark'
    document.documentElement.dataset.background = background.id
  }, [background.id])

  useEffect(() => {
    const image = new Image()
    const markReady = () => setIsBackgroundReady(true)

    setIsBackgroundReady(false)
    image.src = background.url

    if (image.complete) {
      markReady()
      return undefined
    }

    image.addEventListener('load', markReady)
    image.addEventListener('error', markReady)

    return () => {
      image.removeEventListener('load', markReady)
      image.removeEventListener('error', markReady)
    }
  }, [background.url])

  return (
    <div className="app-shell">
      <div
        className={`bg-fixed${isBackgroundReady ? ' is-ready' : ''}`}
        style={{ '--bg-image': `url(${background.url})` }}
        aria-hidden="true"
      />
      <Header />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App