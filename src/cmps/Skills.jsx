import React from 'react'

export function Skills() {
  return (
    <div id="skills" className="container projects-container">
      <section className="projects-header">
      <svg className='svg-title' viewBox="0 0 300 150">
          <symbol id="skills-txt">
            <text textAnchor="middle" x="50%" y="35%" className="text--line">
              My Skills
            </text>
          </symbol>

          <g className="g-ants">
            <use xlinkHref="#skills-txt" className="skills-copy"></use>
            <use xlinkHref="#skills-txt" className="skills-copy"></use>
            <use xlinkHref="#skills-txt" className="skills-copy"></use>
            <use xlinkHref="#skills-txt" className="skills-copy"></use>
            <use xlinkHref="#skills-txt" className="skills-copy"></use>
          </g>
        </svg>
      </section>
    </div>
  )
}
