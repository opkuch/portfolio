import React from 'react'

export default function SkillPreview({ skillObj }) {
  return (
    <div className='skill-preview'>
      <a href={skillObj.href} target="_blank" rel="noreferrer">
        {' '}
        <img
          src={skillObj.imgUrl}
          alt={skillObj.name}
          width="60"
          height="60"
        />{' '}
      </a>
    </div>
  )
}
