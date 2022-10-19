import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import DarkModeSwitch from '../features/DarkModeSwitch'
import darkModeLogo from '../assets/img/logo-dark.png'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const logoRef = useRef()

  useEffect(() => {
    if (isDark) {
      containerRef.current.classList.add('night')
      logoRef.current.src = darkModeLogo
    }
    else {
      containerRef.current.classList.remove('night')
      logoRef.current.src = logo
    }
  })

  return (
    <header
      ref={containerRef}
      className={`flex column justify-center align-center header-container`}
    >
      <section className="flex align-center header-logo">
          <img ref={logoRef} className='logo' src={darkModeLogo} alt=""/>
      </section>
      <nav>
        <ul className="clean-list flex">
            <li className="flex column align-center">
              <NavLink
                end
                to='/'
                className="nav-link"
              >
              <div className='dot'></div>
                home
              </NavLink>
            </li>
            <li className="flex column align-center">
              <NavLink
                end
                to= '/projects'
                className="nav-link"
              >
              <div className='dot'></div>
                projects
              </NavLink>
            </li>
            <li className="flex column align-center">
              <NavLink
                end
                to= '/about'
                className="nav-link"
              >
                <div className='dot'></div>
                about
              </NavLink>
            </li>
        </ul>
        <DarkModeSwitch />
      </nav>
    </header>
  )
}
