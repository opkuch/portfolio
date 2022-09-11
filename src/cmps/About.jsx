import React from 'react'

export function About() {
  return (
    <div id="about" className="container about-container">
      <svg className="svg-title" viewBox="0 0 300 150">
        <symbol id="about-txt">
          <text textAnchor="middle" x="50%" y="35%" className="text--line">
            About Me
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#about-txt" className="about-title"></use>
          <use xlinkHref="#about-txt" className="about-title"></use>
          <use xlinkHref="#about-txt" className="about-title"></use>
          <use xlinkHref="#about-txt" className="about-title"></use>
          <use xlinkHref="#about-txt" className="about-title"></use>
        </g>
      </svg>
    </div>
  )
}
