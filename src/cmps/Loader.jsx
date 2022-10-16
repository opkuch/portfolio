import loaderImg from '../assets/img/loader2.gif'
import Typewriter from 'typewriter-effect'

export default function Loader() {
  return (
    <div className='loader-container column'>
      <img src={loaderImg} alt=""/>
      <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('LOADING...').start()
            }}
          />
    </div>
  )
}
