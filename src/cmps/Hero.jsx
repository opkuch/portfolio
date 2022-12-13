import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import blobImg from '../assets/img/blob.svg'
import arrowImg from '../assets/img/arrow.svg'
import ImageParticles from '../features/ImageParticles'
import scrollDownArrowsImg from '../assets/img/scroll-down.svg'
import { Link } from 'react-scroll'
export function Hero() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  useEffect(() => {}, [])
  useEffect(() => {
    if (isDark) {
      containerRef.current.classList.add('dark')
    } else {
      containerRef.current.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="hero-wrapper" id="hero">
      <div ref={containerRef} className="hero-layout hero-container">
        <section className="hero-title flex column">
          <p className="small-txt">hi, my name is</p>
          <p className="purple">Nadav Ben Hur</p>
          <p>I am a web developer</p>
          <div className="hero-details">
            <span>My passion is to build amazing UI/UX experiences</span>
            <a className="mail-link" href="mailto:nadavbenhur@gmail.com">
              <button className="nice-button">work with me</button>
            </a>
          </div>
        </section>
        <img className="blob-bg" src={blobImg} alt="" />
      </div>
      <div>
        <div className="arrow-wrapper">
          <span>Hover over me!</span>
          <img className="arrow-img" src={arrowImg} alt="" />
        </div>
        <ImageParticles />
      </div>
      <Link to='projects' className='arrows-link'>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </Link>
    </div>
  )
}
