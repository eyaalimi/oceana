import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'


const Home = () => {



  useEffect(() => {
    Aos.init({ duration: 2000 })

  }, [])
  return (

    <div className='home'>
      <div className='homeText'>
        <span data-aos='fade-up' data-aos-duration='2000' className='spanText'>
          <h3>Découvrir notre agence</h3>
        </span>

        <div data-aos='fade-up' data-aos-duration='4000' className='homeTitle'>
        <strong>Restez à jour des nouveaux offres</strong>
        </div>

        

         <div className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Chercher votre destination</label>
          <div className="input flex">
            <input type="text" placeholder='votre destination' />
            <GrLocation className="icon"/>
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Choisir la date :</label>
          <div className="input flex">
            <input type="date" />
            
          </div>
        </div>
        <div className="priceInput">
          <label htmlFor="price">maximum prix:</label>
          <h3 className="price">5000DT</h3>
          <div className="input flex">
            <input type="range" max="5000" min="1000" />
            
          </div>
        </div>

        <div className="searchOptions flex">
          <HiFilter className="icon"/>
          <span>Plus de resultats</span>
        </div>
      </div> 
      

      </div>

     

    </div>
    
  )
}

export default Home