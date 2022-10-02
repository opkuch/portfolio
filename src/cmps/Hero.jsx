import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
// import Typewriter from 'typewriter-effect'

export function Hero() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const cubeRef = useRef()

  useEffect(() => {
    if (isDark) {
      containerRef.current.classList.add('night')
      cubeRef.current.classList.add('night')
    } else {
      containerRef.current.classList.remove('night')
      cubeRef.current.classList.remove('night')
    }
  })

  return (
    <div ref={containerRef} id="hero" className="container hero-container">
      <section className="hero-title flex column align-center">
        <p className="small-txt">hi, my name is</p>
        <p className="purple">Nadav Ben Hur</p>
        <p>I am a fullstack dev.</p>
        {/* <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hey! ').pauseFor(100).typeString('I am ').pauseFor(350).pasteString('<span class="purple">Nadav</span>').pauseFor(350).pasteString('<br>').pauseFor(1000).typeString(' a Fullstack Web Developerrr').pauseFor(1000).deleteChars(2).pauseFor(700).typeString('.').start()
            }}
          /> */}
        <div className="hero-details">
          <p>My passion is to build amazing UI/UX experiences for people.</p>
          <a href="mailto:nadavbenhur@gmail.com">
            <button className="nice-button">work with me</button>
          </a>
        </div>
      </section>

      <div ref={cubeRef} className="cube-animation">
        {Array.from({ length: 7 }).map((item, idx) => (
          <div className="cube" key={idx}></div>
        ))}
      </div>
    </div>
  )
}
