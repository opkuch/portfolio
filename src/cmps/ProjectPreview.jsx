import React from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
export function ProjectPreview({ project }) {
  return (
    <div className="flex project-preview">
      <section className="thumbnail-container">
        <img className="project-thumbnail" src={project.thumbnail} alt=""/>
      </section>
      <section className="project-details flex column">
        <span className="small-title">{project.name}</span>
        <div className="flex skill-list">
          {project.skills.map((skillId) => (
            <SkillPreview
              key={skillId}
              skillObj={appService.getSkillById(skillId)}
              isRef={false}
            />
          ))}
        </div>

        <span className="description">{project.description}</span>
        <section className="project-actions">
          <button
            className="nice-button"
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            view demo
          </button>
          <button className='nice-button' onClick={() => window.open(project.repoUrl, '_blank')}>
            github repo
          </button>
        </section>
      </section>
    </div>
  )
}
