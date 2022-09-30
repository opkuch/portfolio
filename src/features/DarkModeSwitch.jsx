import React, {useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DarkModeSwitch() {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.featureModule.isDark)

  return (
    <div className='switch-wrapper'>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={() => dispatch({ type: 'TOGGLE_DARKMODE', isDark: !isDark })} />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"> </div>
      </label>
    </div>
  )
}
