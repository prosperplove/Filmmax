import React from 'react'
import { Link } from 'react-router-dom'
import camera2 from "../images/iconcamera.jpg"
import { FaTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
const Footer = () => {
  const brandName="FILMMAX"
  return (
    <div>
    <footer className='footer'> 
     
        <div className="container-fluid pt-5">
       <div className="row">
        <div className="col-6 col-md-6 col-lg-3">
         <h1>Explore</h1>
         <ul>
          <Link to="/Vision" style={{textDecoration:"none"}}><li>Our Vision</li></Link>
          <Link to="/Director" style={{textDecoration:"none"}}> <li>Directors Community</li></Link>
          <Link to="/Script" style={{textDecoration:"none"}}><li>Script writers Community</li></Link>
         <Link to="/Video" style={{textDecoration:"none"}}><li>Video grahpersCommunity</li></Link>
          <Link to="/Crew" style={{textDecoration:"none"}}><li>Crew members Community</li></Link>
         </ul>
        </div>
         <div className="col-6 col-md-6 col-lg-3">
          <h1>Reelconnect</h1>
          <p>Connecting creators since 2020. Find collaborators, <br />showcase projects, and bring cinematic visions to life.</p>
           <Link to="/RegistrationForm"><button type="button" class="btn-dark">Join Community</button></Link>
        </div>
         <div className="col-6 col-md-6 col-lg-3">
          <h1> <span className='brand-name'>{brandName}</span></h1>
          <img src={camera2} alt="" style={{ width:"10%", borderRadius:"10px"  }}/>
        </div>
        
          <div className="col-6 col-md-6 col-lg-3">
          <h1>Follow Us</h1>
          <div>
          <a href="https://facebook.com" style={{ padding:"10px"}}><FaFacebook size={30}/></a>
           <a href="https://ng.linkedin.com" style={{ padding:"10px"}}> <FaLinkedin size={30}/></a>
            <a href="https://x.com" style={{ padding:"10px"}}><FaTwitter size={30}/></a>
           </div>
        </div>
       </div>
        </div>

     
   </footer>
    </div>
  )
}

export default Footer