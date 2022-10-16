import React, { useState, useEffect, useRef } from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
import { useSelector } from 'react-redux'

export function Skills() {

  const [skills] = useState(appService.getSkills())
  const isDark = useSelector((state) => state.featureModule.isDark)
  const containerRef = useRef()

  useEffect(() => {
    if (isDark) containerRef.current.classList.add('night')
    else containerRef.current.classList.remove('night')
  })

  return (
    <div
      ref={containerRef}
      id="skills"
      className="skills-container"
    >
      <section className="skills-header">
        <h1 className="big-header">My Skills</h1>
      </section>
      <section className="skills-body">
        {skills.map((skill) => (
          <SkillPreview key={skill.id} isRef={true} skillObj={skill} />
        ))}
      </section>
    </div>
  )
}
