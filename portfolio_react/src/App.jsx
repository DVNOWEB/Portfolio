import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const baseUrl = import.meta.env.BASE_URL
  const bgImage = `url(${baseUrl}images/b2.jpg)`
  return (
    <>
      <div
        className="bg-fixed"
        style={{ '--bg-image': bgImage }}
        aria-hidden="true"
      />
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
