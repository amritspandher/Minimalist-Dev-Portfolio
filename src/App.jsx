import React from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-blue-100 to-green-400">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
