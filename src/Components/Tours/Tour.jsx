import React, {useEffect}  from 'react'
import './Tour.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import tourImage1 from '../../Assets/image.jpg'
import tourImage2 from '../../Assets/image2.jpg'
import {AiFillStar} from 'react-icons/ai'
const Tour = () => {

  useEffect(() => {
    Aos.init({duration:2000})

  },[])

  return (
    <div className='tours container section'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours 
        </span>


        <div className="tourContainer">
          <div data-aos='fade-up' data-aos-duration ='2000'   className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1}  />
            </div>
            <div data-aos='fade-up' data-aos-duration ='3000'  className="tourInfo">
              <span className="tourTitle">
                  Spain
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>
              <p>
                Spain , a country on Europe's Iberian Peninsula , includes 17 autonomous
                regions with diverse geography and cultures . Capital city Madrid is home to the Royal Place and 
                Palace and Prado museum.
              </p>
              <button className="btn"> Buy this Tour </button>
            </div>
            <span className="price">
              $700
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration ='3000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2}  />
            </div>
            <div data-aos='fade-up' data-aos-duration ='3500'  className="tourInfo">
              <span className="tourTitle">
                  Sahara 
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  10 Customer Review
                </small>
              </div>
              <p>
              The Sahara  is a desert on the African continent. With an area of 9,200,000 square kilometres , it is the largest hot desert in the world and the third-largest desert overall, 
              smaller only than the deserts of Antarctica and the northern Arctic.
              </p>
              <button className="btn"> Buy this Tour </button>
            </div>
            <span className="price">
              $1200
            </span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Tour