import './App.css';
import './assets/styles/global.scss'
import {AppHeader} from './cmps/AppHeader';
import { Projects } from './cmps/Projects';
import { About } from './cmps/About';
import { Hero } from './cmps/Hero';
import { AppParticles } from './features/AppParticles'
import { Skills } from './cmps/Skills';
import Footer from './cmps/Footer';
import { useSelector } from 'react-redux'
import {useEffect} from 'react'

function App() {

  const isDark = useSelector((state) => state.featureModule.isDark)
  useEffect(() => {
      if (isDark) window.document.body.classList.add('night')
      else window.document.body.classList.remove('night')
  })
  return (
    <>
      <AppHeader />
      <AppParticles />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
\    </>
  );
}

export default App;
