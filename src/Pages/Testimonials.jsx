import React from 'react'
import one from "../images/passport.jpg"
import two from "../images/passport2.jpg"
import three from "../images/passport3.jpg"
import four from "../images/passport4.jpg"
import five from "../images/passport5.jpg"
import { FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
const Testimonials = () => {
      const brandName='FILMMAX'
  return (
    <div>
      <div className="section-4 py-4">
     <div className="member">
    <button type="button" class="btn btn-danger">Testimonials</button>
    <h1>What Our Members Say</h1>
    <p>Discover the impact <span className='brand-name'>{brandName}</span> had on the lives of our members. <br />Hear firsthand from those who have found meaningful connections,<br /> professional growth, and a supportive community through our platform.</p>
     </div>
      <div className="marquee">
        <div className="marquee-content">
    
          <div class="card">
        <img src={one} alt="..."/>
        <h1>Lisa R. <FaTwitter style={{ color:"blue" }}></FaTwitter></h1>
       <p>The community events and networking opportunities have been valuable, i have made my first big project working with the team, this has shape my work rate. i can't wait for what the future brings.</p>
       </div>

  
          <div class="card">
        <img src={five} alt="..."/>
        <h1>Mane N. <FaTwitter style={{ color:"blue" }}></FaTwitter></h1>
       <p>The community events and networking opportunities have been valuable, i have made my first big project working with the team, this has shape my work rate. i can't wait for what the future brings.</p>
     
  </div>
  
          <div class="card">
        <img src={three} alt="..."/>
        <h1>Tom.O <FaTwitter style={{ color:"blue" }}></FaTwitter></h1>
       <p>The community events and networking opportunities have been valuable, i have made my first big project working with the team, this has shape my work rate. i can't wait for what the future brings.</p>
      
  </div>
  
          <div class="card">
        <img src={two} alt="..."/>
        <h1>Rita.C. <FaTwitter style={{ color:"blue" }}></FaTwitter></h1>
       <p>The community events and networking opportunities have been valuable, i have made my first big project working with the team, this has shape my work rate. i can't wait for what the future brings.</p>
   </div>
  </div>
  </div>
    
   </div>
    </div>
  )
}

export default Testimonials
