import blobImg from '../assets/img/blob.svg'
import ImageParticles from '../features/ImageParticles'
import { Link } from 'react-scroll'
export function Hero() {

  return (
      <div className="hero-wrapper" id="hero">
        <div className="hero-layout hero-container">
          <section className="hero-title flex column">
            <p className="small-txt">hi, my name is</p>
            <p className="purple">Nadav Ben Hur</p>
            <p>I am a fullstack developer</p>
            <div className="hero-details">
              <span>My passion is to build amazing UI/UX experiences</span>
              <a className="mail-link" href="mailto:nadavbenhur@gmail.com">
                <button className="nice-button">work with me</button>
              </a>
            </div>
          </section>
          <img className="blob-bg" src={blobImg} alt="" />
        </div>
        <div>
          {/* <div className="arrow-wrapper">
          <span>Hover over me!</span>
          <img className="arrow-img" src={arrowImg} alt="" />
        </div> */}
          <ImageParticles />
        </div>
        <Link to="projects" className="arrows-link">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </Link>
      </div>
  )
}
