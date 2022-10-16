import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
// import { appService } from '../services/appService'
import Typewriter from 'typewriter-effect'
import { AppParticles } from '../features/AppParticles'
import {Blob} from '../features/Blob'
export function Hero() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  // const reactSkill = appService.getSkillById('s100')
  // const reduxSkill = appService.getSkillById('s114')
  // const vueSkill = appService.getSkillById('s117')
  // const nodeSkill = appService.getSkillById('s112')
  // const expressSkill = appService.getSkillById('s103')
  // const mongoSkill = appService.getSkillById('s110')
  // const angularSkill = appService.getSkillById('s101')
  // const firebaseSkill = appService.getSkillById('s105')

  // const skills = [
  //   reactSkill,
  //   reduxSkill,
  //   vueSkill,
  //   nodeSkill,
  //   expressSkill,
  //   mongoSkill,
  //   angularSkill,
  //   firebaseSkill,
  // ]

  useEffect(() => {
    if (isDark) {
      containerRef.current.classList.add('night')
    } else {
      containerRef.current.classList.remove('night')
    }
  }, [isDark])

  return (
    <>
      <div ref={containerRef} id="hero" className="container hero-container">
        <section className="hero-title flex column align-center">
          <p className="small-txt">hi, my name is</p>
          <p className="purple">Nadav Ben Hur</p>
          <p>I am a fullstack dev.</p>
          <Blob />
          <div className="hero-details">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('My Passion')
                  .pauseFor(300)
                  .typeString(' is to build ')
                  .pauseFor(300)
                  .typeString('amazing')
                  .pauseFor(300)
                  .typeString(' UI/UX experiences')
                  .start()
              }}
            />{' '}
            <a className="mail-link" href="mailto:nadavbenhur@gmail.com">
              <button className="nice-button">work with me</button>
            </a>
          </div>
        </section>
      </div>
      <AppParticles />
    </>
  )
}
