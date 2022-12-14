import './assets/styles/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { Projects } from './cmps/Projects'
import { About } from './cmps/About'
import { Hero } from './cmps/Hero'
import Footer from './cmps/Footer'

function App() {


  return (
    <div className="flex column app-container">
      <div className="main">
        <AppHeader />
        <Hero />
        <Projects />
        <About />

        <Footer />
      </div>
    </div>
  )
}

export default App
