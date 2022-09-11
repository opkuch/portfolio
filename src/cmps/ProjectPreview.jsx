import React from 'react'

export function ProjectPreview({project}) {
    console.log(project.thumbnail)
  return (
    <div className='flex column align-center project-preview'>
        <span className='small-title'>{project.name}</span>
        <span className='description'>{project.description}</span>
        <img onClick={() => window.open(project.url, '_blank')} src={project.thumbnail}/>
        <span className='skills'>[{project.skills.map(skill => <span className='small-skill'>{skill}</span>)}]</span>
    </div>
  )
}
