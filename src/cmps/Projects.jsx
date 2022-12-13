import React, {useState, useEffect, useRef} from 'react'
import { ProjectPreview } from './ProjectPreview'
import { appService } from '../services/appService'
import { useSelector, useDispatch } from 'react-redux'

export function Projects() {
  const [projects] = useState(appService.getProjects())
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
      if (isDark && containerRef.current) containerRef.current.classList.add('dark')
      else if (containerRef.current) containerRef.current.classList.remove('dark')
  }, [isDark])

  return (
    <div ref={containerRef} id="projects" className="projects-container">
      <section className="projects-header">
        {/* <h1 className='big-header'>Coding Projects</h1> */}
      </section>
      <section className='projects-body'>
          {projects.map((project) => <ProjectPreview key={project.id} project={project} />)}
      </section>
    </div>
  )
}
