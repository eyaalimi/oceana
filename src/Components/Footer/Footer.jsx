import React, {useEffect}  from 'react'
import './Footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaLocationArrow} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration:2000})

  },[])

  return (
    <div className='footer'>
      <div className="secContainer container">
        <div className="content grid">

          <div data-aos='fade-up' data-aos-duration ='2000' className="row">
            <div className="spanText">
              CONTACT US
            </div>

            <div className="conatctDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span> +216 20202020</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span> oceanatravelagency@ocena.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className='icon'/>
                <span> Sousse , Tunisia</span>
              </span>
              
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration ='2000'  className="row">
            <div className="wspanText">
              POPULAR NEWS
            </div>

            <div className="singleNews">
              <span className="text">
                Your Personal Guide To the most places to visit in the world
              </span>
              <p>
                Jan 04,2023
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
                The grand reveal of the most iconic hotel in the world - Atlantis the Royal
              </span>
              <p>
                Jan 20,2023
              </p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration ='2000'  className="row">
            <div className="spanText">
              QUICK LINKS
            </div>

            <div className="footerLinks">
              <ul>
                <li>About US </li>
                <li>Our Team </li>
                <li>Gallery </li>
                <li>Blog </li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomDiv flex">
          <p>Copyright 2023 Oceana - All rights reserved</p>

          <div className="social flex">
            <FaFacebook  className='icon'/>
            <AiFillInstagram  className='icon'/>
            <TiSocialTwitter  className='icon'/>
            <BsPinterest  className='icon'/>
          </div>

          <p>Private Policy </p>
        </div>
      </div>

    </div>
  )
}

export default Footer