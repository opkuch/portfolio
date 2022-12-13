import {useState} from 'react'
import { useProgressiveImage } from '../custom-hooks/useProgressiveImage'
import {Button} from './Button'
import ProjectDetails from './ProjectDetails'
import imgLoader from '../assets/img/image-loader.svg'

export function ProjectPreview({ project }) {
  const [isDetails, setIsDetails] = useState(false)
  const loaded = useProgressiveImage(project.thumbnail)

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
    <div className="flex project-preview" style={{background: `url(${loaded || imgLoader})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <section className="project-actions">
          {isDetails? <ProjectDetails name={project.name} description={project.description} skills={project.skills} /> : ''}
          <div className='wrapper'>
            <Button color='#f1f1f1' endIcon='preview' text='Demo' clickFunc={openDemo}/>
            <Button color='#f1f1f1' text='Repository' endIcon='code' clickFunc={openRepo}/>
            <Button color='#f1f1f1' text='Details' endIcon='info' clickFunc={openDetails}/>
          </div>
      </section>
    </div>
  )
}
