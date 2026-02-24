import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import FAQ from './components/FAQ'
import Vision from './components/VisionFortheFuture'
import Impact from './components/ImpactNumbers'
import LanguageSelector from './components/LanguageSelector'
// import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen font-sans text-gray-900 bg-white'>
      <Navbar />
      <Hero />
      {/* <Impact /> */}
      <About />
      <Events />
      <Blog />
      <Vision />
      <Contact />
      {/* <FAQ /> */}
      <Footer />
      <div className="fixed bottom-2 right-3 md:hidden z-50">
        <LanguageSelector />
      </div>
    </div>
  )
}

export default App