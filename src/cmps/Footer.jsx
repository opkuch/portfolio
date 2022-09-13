import React from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
export default function Footer() {
    const reactSkill = appService.getSkillById('s100')
  return (
    <footer className='flex justify-center'><span className='flex align-center'>This website is built with <SkillPreview skillObj={reactSkill} isRef={false}/></span>Collaborate with me - nadavbenhur@gmail.com</footer>
  )
}
