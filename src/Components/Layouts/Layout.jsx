import React from 'react';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Tours from '../Tours/Tour'
import Discount from '../Discount/Discount';
import Review from '../Review/Review';
import { Nav } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



const Layout = ({children}) => {


  return (
    <>
    <Navbar/>

    
    {/* <div>
         <Home/>
        <Cards/>
        <Tours/>  
        <Discount/>
        <Review/>
        </div> */}

        <main className='main'>{children}</main>
        <Footer/>


   
    </>
  )
}

export default Layout ;