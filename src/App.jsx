import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='selection:bg-cyan-300 selection:text-cyan-900'>
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">        
      </div>

      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default App