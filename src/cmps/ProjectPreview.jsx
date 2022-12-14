import { useState } from 'react'
import { useProgressiveImage } from '../custom-hooks/useProgressiveImage'
import { Button } from './Button'
import imgLoader from '../assets/img/image-loader.svg'

export function ProjectPreview({ project, idx }) {
  const [isDetails, setIsDetails] = useState(false)

  const openDemo = () => {
    window.open(project.demoUrl, '_blank')
  }

  const openRepo = () => {
    window.open(project.repoUrl, '_blank')
  }

  const openDetails = () => {
    setIsDetails(!isDetails)
  }
  return (
    <div className="flex column align-center project-preview">
      <section>
      <section className="project-details">
      <div className="container-2" style={idx % 2 === 0? {borderRadius: '100px 20px 20px 20px'} : {borderRadius: '20px 20px 100px 20px'}}>
        <p className="number">{idx + 1}</p>
        <h2>{project.name}</h2>
        <p className="text">
          {project.description}
        </p>
      <section className="project-actions">
        <Button endIcon="preview" round={true} clickFunc={openDemo} />
        <Button endIcon="code" clickFunc={openRepo} round={true} />
      </section>
      </div>
    </section>
      </section>
    </div>
  )
}
