import React from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
export function ProjectPreview({ project }) {
  return (
    <div className="flex column align-center project-preview">
      <span className="small-title">{project.name}</span>
      <span className="description">{project.description}</span>
      <img
        className="project-thumbnail"
        onClick={() => window.open(project.url, '_blank')}
        src={project.thumbnail}
      />
      <div className="project-skills flex column">
        <div>Built with</div>
        <div className='flex skill-list'>
          {project.skills.map((skillId) => (
            <SkillPreview
              key={skillId}
              skillObj={appService.getSkillById(skillId)}
              isRef={false}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
