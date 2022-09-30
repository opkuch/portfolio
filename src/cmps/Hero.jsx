import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Typewriter from 'typewriter-effect'

export function Hero() {
  const bodyRef = useRef(null)
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()

  useEffect(() => {

    if (isDark) containerRef.current.classList.add('night')
    else containerRef.current.classList.remove('night')
  })


  return (
    <div
      ref={containerRef}
      id="hero"
      className="container hero-container"
    >
      <section className="hero-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hey! ').pauseFor(100).typeString('I am ').pauseFor(350).pasteString('<span class="purple">Nadav</span>').pauseFor(350).typeString(' a Web Developerrr').pauseFor(1000).deleteChars(2).pauseFor(700).typeString('.').start()
          }}
        />
      </section>

      <div className="cube-animation">
        {Array.from({ length: 7 }).map((item, idx) => (
          <div className="cube" key={idx}></div>
        ))}
      </div>
    </div>
  )
}
