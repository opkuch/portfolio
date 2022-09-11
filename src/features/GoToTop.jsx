import React from 'react'

export function GoToTop() {
  return (
    <div className='go-to-top'>
    <span onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>⬆</span>
  </div>
)
}
