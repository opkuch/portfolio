import React, {useRef, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { ContactMe } from './ContactMe'

export function About() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()

  useEffect(() => {
      if (isDark) containerRef.current.classList.add('night')
      else containerRef.current.classList.remove('night')
  })

  return (
    <div ref={containerRef} id="about" className="container block about-container">
      <section className="about-header">
        <h1 className='big-header'>About Me</h1>
      </section>
      <section className="about-body">
        <div className="about-info">
          <span>
            I am a Fullstack Web Developer from Israel. I am eager to learn about new technologies and about creating e2e applications. I have experience in writing pixel perfect SPA (Single Page Applications) with the latest technologies. I have aquired most of my knowledge the past year with hard work and dedication, as well as graduating from <a className='p-link' href='https://www.coding-academy.org/' target='_blank'>Coding Academy Fullstack Bootcamp</a>
          </span>
        </div>
        <div className="about-img"></div>
      </section>
      <ContactMe />
    </div>
  )
}
