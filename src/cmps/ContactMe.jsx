import React from 'react'

export function ContactMe() {
  return (
    <section className="contact">
    <h1>Lets be in touch</h1>
    <div className='contact-ways flex'>
      <a
        href="https://linkedin.com/in/nadav-ben-hur-381584249"
        target="_blank"
        rel="noreferrer"
      >
        <img
          align="center"
          src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
          alt="Linkedin"
        />
      </a>
      <a
        href="mailto:nadavbenhur@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
          className='gmail-img'
          alt='Gmail'
        />
      </a>
      <a
        href="https://github.com/opkuch"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          className='github-icon'
          alt='Github'
        />
      </a>
    </div>
  </section>
)
}
