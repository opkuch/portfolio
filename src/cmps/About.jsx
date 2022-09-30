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
            Fullstack Web Developer from Israel, eager to learn about new technologies and creating e2e applications. Experienced in writing pixel perfect SPA (Single Page Applications) and complex web applications. Expanding my knowledge with hard work and dedication, and always focused on getting the best results.
          </span>
        </div>
        <div className="about-img"></div>
      </section>
      <ContactMe />
    </div>
  )
}
