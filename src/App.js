import './App.css'
import './assets/styles/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Projects } from './cmps/Projects'
import { About } from './cmps/About'
import { Hero } from './cmps/Hero'
import Footer from './cmps/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  useEffect(() => {
    if (isDark) window.document.body.classList.add('night')
    else window.document.body.classList.remove('night')
  }, [isDark])
  return (
    <Router>
      <div className='flex column app-container'>
        <div className="main">
          <AppHeader />
          <Routes>
            <Route exact="true" path="/projects" element={<Projects />} />
            <Route exact="true" path="/about" element={<About />} />
            <Route exact="true" path="/" element={<Hero />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
