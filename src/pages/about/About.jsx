import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import './about.css'
 
const About = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <div className='inner-container'>
          <h1>ABOUT</h1>
      </div>
       
    </div>
  )
}

export default About
