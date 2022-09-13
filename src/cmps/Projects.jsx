import React, {useState, useEffect, useRef} from 'react'
import { ProjectPreview } from './ProjectPreview'
import { appService } from '../services/appService'
import { useSelector } from 'react-redux'
export function Projects() {
  const [projects] = useState(appService.getProjects())
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()

  useEffect(() => {
      if (isDark) containerRef.current.classList.add('night')
      else containerRef.current.classList.remove('night')
  })

  useEffect(() => {
  })
  return (
    <div ref={containerRef} id="projects" className="container block projects-container">
      <section className="projects-header">
        <h1 className='big-header'>Projects</h1>
      </section>
      <section className='projects-body simple-cards-grid'>
        {projects.map(project => <ProjectPreview key={project.id} project={project}/>)}
      </section>
    </div>
  )
}
