import React, {useState, useEffect, useRef} from 'react'
import { ProjectPreview } from './ProjectPreview'
import { appService } from '../services/appService'

export function Projects() {
  const [projects] = useState(appService.getProjects())

  return (
    <div id="projects" className="projects-container">
        <h1 className='page-headline'>projects</h1>
      <section className='projects-body'>
          {projects.map((project, index) => <ProjectPreview key={project.id} idx={index} project={project} />)}
      </section>
    </div>
  )
}
