import React, {useRef, useEffect} from 'react'
import { ContactMe } from './ContactMe'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import ImageParticles from '../features/ImageParticles'

export function About() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const isLoading = useSelector((state) => state.featureModule.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    
    setTimeout(() => {
      dispatch({type: 'TOGGLE_LOADER', isLoading: false})
    }, 4500)
    return () => dispatch({type: 'TOGGLE_LOADER', isLoading: true})
  }, [dispatch])

  useEffect(() => {
      if (isDark && containerRef.current) containerRef.current.classList.add('night')
      else if (containerRef.current) containerRef.current.classList.remove('night')
  }, [isDark, isLoading])
  if (isLoading) return <Loader />
  else return (
    <div ref={containerRef} id="about" className="about-container">
      <section className="about-header">
        <h1 className='big-header'>a little bit about me..</h1>
      </section>
      <section className="about-body">
        <div className="about-info">
          <span>
            Fullstack Web Developer from Israel, eager to learn about new technologies and creating e2e applications. Experienced in writing pixel perfect SPA (Single Page Applications) and complex web applications.
          </span>
        </div>
        {/* <div className="about-img"></div> */}
        <ImageParticles />
      </section>
      <ContactMe />
    </div>
  )
}
