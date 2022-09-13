import React, {useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'

export function Hero() {
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      titleRef.current.classList.add('init')
    }, 500)
    setTimeout(() => {
      bodyRef.current.classList.add('init')
    }, 1500)

    if (isDark) containerRef.current.classList.add('night')
    else containerRef.current.classList.remove('night')

  })
  return (
    <div ref={containerRef} id="hero" className="container hero-container flex column align-center">
      <section ref={titleRef} className='hero-title'>
        <span >Hey, I'm <span className='purple'>Nadav</span></span>
      </section>
      <section ref={bodyRef} className='flex column hero-body'>
        <div>I am looking for my next challenge as a Web Developer</div>
        <div>Checkout more of my work below!</div>
      </section>
    </div>
  )
}
