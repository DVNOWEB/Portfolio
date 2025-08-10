import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css' // We'll put the CSS here

const App = () => {
  return (
    <>
      <div className="bg-fixed" />
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