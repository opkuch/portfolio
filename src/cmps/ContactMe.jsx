import React from 'react'

export function ContactMe() {
  return (
    <section className="contact">
    <h1>Lets be in touch</h1>
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
)
}
