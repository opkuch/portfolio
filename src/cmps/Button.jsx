import React from 'react'

export const Button = ({
  color = '#202A44',
  text = 'Button',
  type = 'default',
  disableShadow = false,
  startIcon = '',
  endIcon = '',
  disableButton = false,
  clickFunc,
  size = 'lg'
}) => {
    const handleClick = (e) => {
        if (clickFunc) return clickFunc(e)
        else return null
    }
  return (
    <button
      className={`btn ${type} ${size} ${disableShadow ? '' : 'shadow'}`}
      disabled={disableButton}
      onClick={handleClick}
      style={{
        color: color,
        outline: type === 'outline' ? `1px solid ${color}` : 'none',
      }}
    >
      <span className="material-icons">{startIcon}</span>
      <span className="btn-txt">{text}</span>
      <span className="material-icons">{endIcon}</span>
    </button>
  )
}
