import React, {useEffect}  from 'react'
import './Discount.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import video from '../../Assets/video.mp4'



const Discount = () => {

  useEffect(() => {
    Aos.init({duration:2000})

  },[])


  return (
    <div className='discount section'>
      <div className="secContainer">
        <video src={video} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span data-aos='fade-up' data-aos-duration ='2000'  className='title'>
            Get in touch With us
          </span>
          <p data-aos='fade-up' data-aos-duration ='2500' >
            for more information plz enter your email
          </p>

          <div data-aos='fade-up' data-aos-duration ='3000'  className="input_btn flex">
            <input type="text" placeholder='Enter your Email' />
            <button className='btn'> Subscribe </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Discount