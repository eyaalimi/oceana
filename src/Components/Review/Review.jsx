import React, {useEffect}  from 'react'
import './Review.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

import user1 from '../../Assets/user1.jpg'
import user2 from '../../Assets/user2.jpg'

const Review = () => {

  useEffect(() => {
    Aos.init({duration:2000})

  },[])


  return (
    <div className='review section'> 
    <div className="seccontainer">
      <span className="secTitle">
        What People Say about Us
      </span>

      <div className="reviewContainer container grid">
        <div data-aos='fade-up' data-aos-duration ='3000' className="singleReview">
          <div className="imgDiv">
            <img src={user1} />
          </div>
          <p>
            Happy to book my travel from you !! so satisfied !
          </p>

          <div className="name"> 
              Rim Riahi 
          </div>

        </div>

        <div data-aos='fade-up' data-aos-duration ='3500' className="singleReview">
          <div className="imgDiv">
            <img src={user2} />
          </div>
          <p>
            good work !!
          </p>

          <div className="name"> 
              Hamza Belloumi
          </div>

        </div>


      </div>
    </div>

    </div>
  )
}

export default Review