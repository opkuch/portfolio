import React from 'react'

export const Button = ({
  text = '',
  type = 'default',
  disableShadow = false,
  startIcon = '',
  endIcon = '',
  disableButton = false,
  clickFunc,
  size = '',
  iconSrc = null,
  round = false,
  isActive = false,
  isHover = true
}) => {
    const handleClick = (e) => {
        if (clickFunc) return clickFunc(e)
        else return null
    }
  return (
    <button
      className={`btn ${type} ${size} ${disableShadow ? '' : 'shadow'} ${iconSrc? 'icon-button' : ''} ${round? 'round' : ''} ${isActive? 'active' : ''} ${isHover? 'hover' : ''}`}
      disabled={disableButton}
      onClick={() => handleClick()}
    >
        {iconSrc? <img className='icon-img' src={iconSrc} alt=''/> : ''}
      {startIcon? <span className="material-icons">{startIcon}</span> : ''}
      {text? <span className="btn-txt">{text}</span> : ''}
      {endIcon? <span className="material-icons">{endIcon}</span> : ''}
    </button>
  )
}
