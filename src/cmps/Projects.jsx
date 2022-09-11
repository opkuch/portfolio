import React from 'react'
import ProjectsTitle from '../assets/svg/projects.svg'
export function Projects() {
  console.log(ProjectsTitle)
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
      <section className='projects-body flex column align-center'>
        <div>hi</div>
        <div>bye</div>
      </section>
    </div>
  )
}
