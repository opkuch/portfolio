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
            I am a Fullstack Web Developer full of enthusiasm about learning new
            technologies and creating e2e applications, experienced in writing
            SPA (Single Page Applications) with the latest technologies
          </span>
        </div>
        <img
          className="about-img"
          src="https://gcdnb.pbrd.co/images/sMfaOkBpGv2b.png?o=1"
        />
      </section>
      <section className="contact">
        <span>Stay in touch..</span>
        <div className='flex'>
          <a
            href="https://linkedin.com/in/nadav-ben-hur-381584249"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="nadav-ben-hur-381584249"
              height="30"
              width="40"
            />
          </a>
          <a
            href="https://linkedin.com/in/nadav-ben-hur-381584249"
            target="blank"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              height="35"
              width="40"
            />
          </a>
        </div>
      </section>
    </div>
  )
}
