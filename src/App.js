import './App.css';
import './assets/styles/global.scss'
import {AppHeader} from './cmps/AppHeader';
import { Projects } from './cmps/Projects';
import { About } from './cmps/About';
import { Hero } from './cmps/Hero';
import { AppParticles } from './features/AppParticles'
import { GoToTop } from './features/GoToTop';
import { Skills } from './cmps/Skills';

function App() {
  return (
    <>
      <AppHeader />
      <AppParticles />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <GoToTop />
    </>
  );
}

export default App;
