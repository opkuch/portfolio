import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import DarkModeSwitch from '../features/DarkModeSwitch'
import scrollDirectionHook from '../features/useScrollDirection'

export function AppHeader() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const scrollDirection = scrollDirectionHook();

  useEffect(() => {
    if (isDark) containerRef.current.classList.add('night')
    else containerRef.current.classList.remove('night')
  })

  return (
    <header
      ref={containerRef}
      className={`flex column space-around align-center header-container ${ scrollDirection === "down" ? "hide" : "show"}`}>
      <section className="flex align-center header-logo">
        <span>
          <span>{'<'}</span>
          <span className="purple">{'n'}</span>
          <span>{'Dev /> '}</span>
        </span>
        <DarkModeSwitch />
      </section>
      <nav className="flex">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="nav-link"
        >
          My Skills
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-170}
          duration={500}
          className="nav-link"
        >
          About Me
        </Link>
      </nav>
      <section className="dark-mode-switch"></section>
    </header>
  )
}
