import React, {useState, useEffect, useRef} from 'react'
import { ProjectPreview } from './ProjectPreview'
import { appService } from '../services/appService'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../features/Loader'

export function Projects() {
  const [projects] = useState(appService.getProjects())
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const isLoading = useSelector((state) => state.featureModule.isLoading)
  const dispatch = useDispatch()

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

  if (isLoading) return (<Loader />)
  else return (
    <div ref={containerRef} id="projects" className="projects-container">
      <section className="projects-header">
        {/* <h1 className='big-header'>Coding Projects</h1> */}
      </section>
      <section className='projects-body'>
          {projects.map((project) => <ProjectPreview key={project.id} project={project}/>)}
      </section>
    </div>
  )
}
