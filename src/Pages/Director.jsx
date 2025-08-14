import React from 'react'
import { Link } from 'react-router-dom'
import director from "../images/director.jpg"
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import one from "../images/director3.jpg"
import two from "../images/director4.jpg"
import three from "../images/director5.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { useEffect } from "react"
import Questions from './Questions'
import camera2 from "../images/iconcamera.jpg"
import EventForm from './EventForm'
const Director = () => {
     const brandName='FILMMAX'
   useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div >
      <main>
        <div className="contain"  id='director'>
        <div className="container py-4" id='direct'>
            <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
          <h1 className="fam"> <span className='vision'> BRING YOUR VISION </span> <span className='life'>TO LIFE</span></h1>
         <p className='fam'>place where vision meets reality,  <span className='brand-name'>{brandName}</span> gives you the opportunity to explore your creative vision
             
          </p>
        </div>
          <div className= "col-12 col-md-6 col-lg-6" id='directorPhoto'>
            <img src={director} alt="" style={{ width:"100%", borderRadius:'10px', paddingTop:"60px"}}/>
          </div>
        </div>
        </div>
        <div className="container" id='directive' data-aos="fade-up">
             <p>We have the largest community of professional directors on  <span className='brand-name'>{brandName}</span>.<br />
           shaping the face of entertainment and leveraging a high numbers of creatives into the International market </p>
            <Link to="/RegistrationForm"><button>Become a Member</button></Link>
            <div className='social-media'>
            <FaTwitter/>
             <FaLinkedin/>
             </div>
        </div>
        </div>
       
        <div className=" container" data-aos="fade-up">
        <h1 style={{ textAlign:"center" , fontSize:"xx-large", fontWeight:"700"}}>
            Have a creative <span style={{ backgroundColor:"plum"}}>Idea?</span> let's bring it to
             <span style={{ textDecoration:"underline plum" }} > life</span> together!! <img src={camera2} alt="" style={{ width:"10%", borderRadius:"10px", margin:"10px" }}/></h1>
        </div>
             
        <div className="container py-4" id='director-section1'>
          <div className="row">
          <div class="col-12 col-md-6 col-lg-6">
               <div id='humphery' data-aos="fade-up" data-aos-duration="2000">
                  <h1 style={{ margin:"10px",fontSize:"x-large", fontWeight:"700" }}>Meet Mr.Humphery</h1>
            <p style={{ margin:"10px" ,fontWeight:"400"}}>Executive general Manager for Director's guild</p>
               <img src={one} alt="..."/>
             </div>
       </div> 
        <div class="col-12 col-md-6 col-lg-6">
               <div id='humphery' data-aos="fade-up" data-aos-duration="2000">
                  <p>"The director is the creative force behind a film. They are the captain of the ship."</p>
       
             </div>
       </div> 
      </div>
       </div>
       <EventForm/>
       <Questions/>
      </main>
    </div>
  )
}

export default Director
