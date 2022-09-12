import React from 'react'

export function About() {
  return (
    <div id="about" className="container about-container">
      <section className="about-header">
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
      </section>
      <section className="about-body">
        <div className="about-info">
          <span>
          I am a Fullstack Web Developer full of enthusiasm.  I am eager to learn about new technologies and love creating e2e applications. I have experience in writing SPA (Single Page Applications) with the latest technologies. I have aquired most of my knowledge the past year with hard work and dedication, as well as graduating from <a className='p-link' href='https://www.coding-academy.org/'>Coding Academy Fullstack Bootcamp</a>
          </span>
        </div>
        <div className="about-img"></div>
      </section>
      <section className="contact">
        <h1>Lets stay in touch..</h1>
        <div className='contact-ways flex'>
          <a
            href="https://linkedin.com/in/nadav-ben-hur-381584249"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="nadav-ben-hur-381584249"
            />
          </a>
          <a
            href="https://gmail.com"
            target="_blank"
          >
            <img
              src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
              className='gmail-img'
            />
          </a>
          <a
            href="https://linkedin.com/in/nadav-ben-hur-381584249"
            target="_blank"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
