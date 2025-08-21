import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const root = document.documentElement
    if (saved === 'dark') root.classList.add('dark')
  }, [])
  return (
    <div className="font-display">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
export default App
