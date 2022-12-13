import React, {useRef, useEffect} from 'react'
import { ContactMe } from './ContactMe'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../features/Loader'
import ImageParticles from '../features/ImageParticles'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
import arrowImg from '../assets/img/arrow.svg'
export function About() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const isLoading = useSelector((state) => state.featureModule.isLoading)
  const dispatch = useDispatch()
  const skills = appService.getSkills()

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'TOGGLE_LOADER', isLoading: false})
    }, 1000)
    return () => dispatch({type: 'TOGGLE_LOADER', isLoading: true})
  }, [dispatch])

  useEffect(() => {
      if (isDark && containerRef.current) containerRef.current.classList.add('dark')
      else if (containerRef.current) containerRef.current.classList.remove('dark')
  }, [isDark, isLoading])


  if (isLoading) return <Loader />
  else return (
    <div ref={containerRef} id="about" className="about-container">
      <section className="about-body">

        <div className="about-info flex column">
          <span>
            Passionate Fullstack Developer, fascinated by web technologies and everything that involves code.
          </span>
          <span>Experienced in creating web applications using</span>
          
          <div className='flex skills-about'>
            {skills.map(skill => <SkillPreview key={skill.id} skillObj={skill}/>)}
          </div>
        </div>
      </section>
      <ContactMe />
    </div>
  )
}
