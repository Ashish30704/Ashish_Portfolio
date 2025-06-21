import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'


// CSS
import './index.css'


// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'


const App = () => {
  return (
    <>
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
    </>
  )
}

export default App
