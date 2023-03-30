import React, {useState} from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {TbGridDots} from 'react-icons/tb'
import {MdTravelExplore} from 'react-icons/md'
import { NavLink , Link } from 'react-router-dom'


import { Button } from 'react-bootstrap'



const Navbar = () => {

    const [active , setActive] = useState('menuDiv')

    const showNavBar = () => {
        setActive('menuDiv activeNavbar')
    }

    //remove navbar
    const removeNavBar = () => {
        setActive('menuDiv')
    } 



 
  return (
    <div>
        <section className="headernav flex">
            <div className="logoDiv">
                <a href='/' className='logo flex'>
                <h2> <MdTravelExplore className="icon"/>   Oceana.</h2>
                </a>
               
            </div>
            <div className={active}>
                <ul className="menuLists">
                    <li className="navItem">
                        
                        <a href="/home"  className="menuLink">Acceuil</a>
                    </li>
                    <li className="navItem">
                        <a href="/tours" onClick={removeNavBar} className="menuLink">Visites</a> 
                    </li>
                    <li className="navItem">
                        <a href="/blog" onClick={removeNavBar} className="menuLink">Blog</a>
                    </li>
                    <li className="navItem">
                        <a href="/hotels" onClick={removeNavBar} className="menuLink">Hotels</a>
                    </li>
                    <li className="navItem">
                        <a href="/location" onClick={removeNavBar} className="menuLink">Location</a>
                    </li>
                    <li className="navItem">
                        <a href="/event" onClick={removeNavBar} className="menuLink">Evenement</a>
                    </li>
                    <li className="navItem">
                        <a href="/about" onClick={removeNavBar} className="menuLink">A propos</a>
                    </li>
                    <li className="navItem">
                        <a href="/contact" onClick={removeNavBar} className="menuLink">Conatct</a>
                    </li>
                    

                    
                    <Button className="btn1" ><Link to="/login">Se connecter</Link>
                    </Button>
                    <Button className="btn1" ><Link to="/register">Sinscrire</Link>
                    </Button>
                
                
                </ul>
               


                <div onClick={removeNavBar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>

                </div>
            </div>

            <div className="socialIcons flex">
               <BsFacebook className='icon'/>
               <AiFillInstagram className='icon'/>
               <BsFillTelephoneFill className='icon'/>
               <HiLocationMarker className='icon'/>
            </div>

            <div onClick = {showNavBar} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>


   
        </section>
        
    </div>
  )
}

export default Navbar