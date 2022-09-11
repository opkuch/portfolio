import React, {useState, useEffect} from 'react'
import projectsDB from '../db/projectsDB.json'
import { ProjectPreview } from './ProjectPreview'

export function Projects() {
  const [projects, setProjects] = useState(projectsDB)

  useEffect(() => {
    console.log(projects)
  })
  return (
    <div id="projects" className="container projects-container">
      <section className="projects-header">
      <svg className='svg-title' viewBox="0 0 300 150">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="35%" className="text--line">
              Projects
            </text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
      </section>
      <section className='projects-body simple-cards-grid'>
        {projects.map(project => <ProjectPreview key={project.id} project={project}/>)}
      </section>
    </div>
  )
}
