import React from 'react'
import skillsDb from '../db/skillsDB.json'
import SkillPreview from './SkillPreview'

export function Skills() {
  return (
    <div id="skills" className="container skills-container">
      <section className="skills-header">
        <svg className="svg-title" viewBox="0 0 300 150">
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
      <section className="skills-body">
          {skillsDb.map(skill => <SkillPreview key={skill.id} skillObj={skill}/>)}
      </section>
    </div>
  )
}
