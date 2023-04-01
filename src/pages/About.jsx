import React from 'react'
import Hero from '../Components/Hero'
import aboutImg from '../Assets/hero6.jpg'
import AboutUs from '../Components/AboutUs'

function About(){
  return (
    <>
    <Hero 
    cName="hero"
    heroImg={aboutImg}
    title="Votre Voyage c'est notre mission"
    />
     <AboutUs/>
   
    </>
  )
}

export default About