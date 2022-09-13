import React from 'react'

export default function SkillPreview({ skillObj }) {
  return (
    <div className="skill-preview">
        <img src={skillObj.imgUrl} alt={skillObj.name} width="60" height="60" />
    </div>
  )
}
