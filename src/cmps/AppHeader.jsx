import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll'
import DarkModeSwitch from '../features/DarkModeSwitch'
import backArrowImg from '../assets/img/back-arrow.svg'
import { Button } from './Button'

export function AppHeader() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const [isShowNav, setIsShowNav] = useState(true)
  useEffect(() => {
    if (isDark) {
      containerRef.current.classList.add('dark')
    } else {
      containerRef.current.classList.remove('dark')
    }
  })

  return (
    <header
      ref={containerRef}
      className={`flex column justify-center align-center header-container ${
        isShowNav ? 'show-nav' : ''
      }`}
    >
      <Button
        iconSrc={backArrowImg}
        clickFunc={() => setIsShowNav(prevState => !prevState)}
        round={true}
        type="outline"
        
      ></Button>

      <nav>
        <ul className="clean-list flex">
          <li className="flex column align-center">
            <Link to="hero" className="nav-link">
              home
            </Link>
          </li>
          <li className="flex column align-center">
            <Link to="projects" className="nav-link">
              projects
            </Link>
          </li>
          <li className="flex column align-center">
            <Link to="about" className="nav-link">
              about
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
