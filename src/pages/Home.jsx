import React from 'react'
import Announcement from '../components/announcement/Announcement';
import Catagories from '../components/Catagories/Catagories';
import ContainerProduct from '../components/Catagories/PopularProduct/ContainerProduct';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Slider from '../components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
       <Navbar/>
       <Slider />
       <Catagories/>
       <ContainerProduct/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Home;

