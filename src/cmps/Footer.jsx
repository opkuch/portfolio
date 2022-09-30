import React, {useEffect, useRef} from 'react'
import SkillPreview from './SkillPreview'
import { appService } from '../services/appService'
import { useSelector } from 'react-redux'
export default function Footer() {
    const reactSkill = appService.getSkillById('s100')
    const isDark = useSelector((state) => state.featureModule.isDark)
    const containerRef = useRef()
  
    useEffect(() => {
        if (isDark) containerRef.current.classList.add('night')
        else containerRef.current.classList.remove('night')
    })
  
  return (
    <footer ref={containerRef} className='flex justify-center'><span className='flex align-center'>This website is built with <SkillPreview skillObj={reactSkill} isRef={false}/></span>Collaborate with me - nadavbenhur@gmail.com</footer>
  )
}
