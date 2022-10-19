import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import loaderImg from '../assets/img/loader2.gif'
import loaderImgDark from '../assets/img/loader1.gif'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'

export default function Loader() {
  const isDark = useSelector((state) => state.featureModule.isDark)
  const [currLoader, setCurrLoader] = useState()
  useEffect(() => {
    if (isDark) {
      setCurrLoader(loaderImgDark)
    } else {
      setCurrLoader(loaderImg)
    }
  }, [isDark])
  return (
    <div className='loader-container column'>
      <img src={currLoader} alt=""/>
      <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('LOADING...').start()
            }}
          />
    </div>
  )
}
