import { useState } from 'react'
import { Link } from 'react-scroll'
import backArrowImg from '../assets/img/back-arrow.svg'
import homeIcon from '../assets/img/home.svg'
import projectsIcon from '../assets/img/briefcase.svg'
import contactIcon from '../assets/img/information.svg'
import { Button } from './Button'

export function AppHeader() {
  const [isShowNav, setIsShowNav] = useState(true)

  return (
    <header
      className={`flex column justify-center align-center header-container ${
        isShowNav ? 'show-nav' : ''
      }`}
    >
      <Button
        iconSrc={backArrowImg}
        clickFunc={() => setIsShowNav((prevState) => !prevState)}
        round={true}
        type="outline"
      ></Button>

      <nav>
        <ul className="clean-list flex">
          <li className="flex column align-center">
            <Link to="hero" className="nav-link" activeClass='active' spy={true}>
              <img className='nav-icon' src={homeIcon} alt="" />
            </Link>
          </li>
          <li className="flex column align-center">
            <Link to="projects" className="nav-link" activeClass='active' spy={true}>
              <img className='nav-icon' src={projectsIcon} alt="" />
            </Link>
          </li>
          <li className="flex column align-center">
            <Link to="about" className="nav-link" activeClass='active' spy={true}>
            <img className='nav-icon' src={contactIcon} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
