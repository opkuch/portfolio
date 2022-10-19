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
    }, 3000)
    return () => dispatch({type: 'TOGGLE_LOADER', isLoading: true})
  }, [dispatch])

  useEffect(() => {
      if (isDark && containerRef.current) containerRef.current.classList.add('night')
      else if (containerRef.current) containerRef.current.classList.remove('night')
  }, [isDark, isLoading])


  if (isLoading) return <Loader />
  else return (
    <div ref={containerRef} id="about" className="about-container">
      <section className="about-body">
        <div>
          <div className='arrow-wrapper'>
            <span>Hover over me!</span>
            <img className='arrow-img' src={arrowImg} alt=""/>
          </div>
          <ImageParticles />
        </div>
        <div className="about-info flex column">
          <span>
            Passionate Fullstack Developer, fascinated by web technologies and everything involves code.
          </span>
          <span>Experinced in creating web applications using</span>
          
          <div className='flex skills-about'>
            {skills.map(skill => <SkillPreview key={skill.id} skillObj={skill}/>)}
          </div>
        </div>
      </section>
      <ContactMe />
    </div>
  )
}
