import React from 'react'
import { Link } from 'react-scroll'
export function AppHeader() {

  return (
    <header className="flex column space-around align-center header-container">
      <section className="header-logo">
        <span onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}><span>{'<'}</span><span className='purple'>{'n'}</span><span>{'Dev /> '}</span></span>
      </section>
      <nav className='flex'>
        <Link to="projects" spy={true} smooth={true} offset={-170} duration={500} className="nav-link">
          Projects
        </Link>
        <Link to='skills' spy={true} smooth={true} offset={-170} duration={500} className="nav-link">
          My Skills
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-170} duration={500} className="nav-link">
          About Me
        </Link>
      </nav>
    </header>
  )
}
