import './App.css'
import './assets/styles/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Projects } from './cmps/Projects'
import { About } from './cmps/About'
import { Hero } from './cmps/Hero'
// import Footer from './cmps/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Loader from './features/Loader'

function App() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isDark') === 'false') {
      dispatch({ type: 'TOGGLE_DARKMODE', isDark: false })
    }
  }, [dispatch])
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2000)
  }, [])
  useEffect(() => {
    if (isDark) window.document.body.classList.add('night')
    else window.document.body.classList.remove('night')
  }, [isDark])

  if (!isLoading) return <Loader />
  return (
    <div className="flex column app-container">
      <div className="main">
        <AppHeader />
        <Hero />
        <Projects />
        <About />

        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
