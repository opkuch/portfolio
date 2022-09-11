import React, {useEffect, useRef} from 'react'
import ShootingStars from '../features/ShootingStars'
export function Hero() {
  const titleRef = useRef(null)
  const bodyRef = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      titleRef.current.classList.add('init')
    }, 500)
    setTimeout(() => {
      bodyRef.current.classList.add('init')
    }, 1500)
  })
  return (
    <div id="hero" className="container hero-container flex column align-center">
      <ShootingStars />
      <section ref={titleRef} className='hero-title'>
        <span >Hey, I'm Nadav</span>
      </section>
      <section ref={bodyRef} className='flex column hero-body'>
        <div>I am a Web Developer</div>
        <div>Checkout my work below!</div>
      </section>
    </div>
  )
}
