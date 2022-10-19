import React from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'

export default function ProjectDetails({ name, description, skills }) {
  return (
    <section className='project-details'>
      <div className='details-wrapper'>
        <h2>{name}</h2>
        <div className="flex skill-list">
          {skills.map((skillId) => (
            <SkillPreview
              key={skillId}
              skillObj={appService.getSkillById(skillId)}
              isRef={false}
            />
          ))}
        </div>
        <span className="description">{description}</span>{' '}
      </div>
    </section>
  )
}
