import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Navigate , Route , Routes } from 'react-router-dom';
import Layout from './Components/Layouts/Layout';
// import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
// import Tours from './Components/Tours/Tour';
// import Discount from './Components/Discount/Discount';
// import Cards from './Components/Cards/Cards';
import About from './pages/About';
import Home from './pages/HomePage';
import Tours from './pages/Tours';
import Location from './pages/Location';
import Login from './pages/Login';
import Register from './pages/Register';

import Event from './pages/Event';
import Hotels from './pages/Hotels';
import Contact from './pages/Conatct';




function App() {
   // let Components
   // switch (window.location.pathname) {
   //    case "/":
   //       Components= <Home/>
   //       break
   //       case "/tours":
   //          Components= <Tours/>
   //          break
   //          case "/about":
   //             Components= <About/>
   //             break
   // }
  // return <Layout/>;
  
 return (
<>
   
   {/* <Navbar/> */}
   <Layout>  <Routes>
  <Route path="/" element={<Navigate replace to="/home" />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/location" element={<Location />} />
  <Route path="/tours" element={<Tours />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/hotels" element={<Hotels />} />
  <Route path="/event" element={<Event />} />
  <Route path="/contact" element={<Contact />} />
  </Routes> </Layout>
   
   

  
   
   {/* {Components} */}
{/* <Layout/>; */}



 {/* {/* <Home/>
<Cards/>
<Tours/>
<Discount/>  */}
   


 
 


    </>  
    );

}

export default App;
