import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import avatar from "../images/avatar.png"
import group from "../images/group.png"
import camera from "../images/camera.png"
import camera2 from "../images/camera2.jpg"
import camera3 from "../images/camera3.jpg"
import sideImage from "../images/sideImage.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Carousel from '../Pages/Carousel'
import Questions from '../Pages/Questions'
import Testimonials from '../Pages/Testimonials'

const MainSection = () => {
    const brandName='FILMMAX'
  
    useEffect(()=>{

  AOS.init({duration:"3000"});

  },[])
  return (
    
    <div>
        
        <div className="section">
        <div className="text-overlay">
       <h1>Build your Professional Career <br /> with <span className='brand-name'>{brandName}</span></h1>
       <p>Filmmax is a bridge between the Entertainment industry and pure talents. <br /> built to shape the industry, where creativity meets demands </p>
       <Link to="/RegistrationForm"><button type="button" class="btn btn-danger">Become a member</button></Link>
          </div>
        </div>
       
<div className="section-2">
    <h2>why choose <span style={{ backgroundColor:"plum" }}>Filmmax</span>?</h2>
<div className="container">
    <div className='row'>
    <div class="col-4 col-md-4 col-lg-4">
    <div class="cards" data-aos="fade-up-right">
<img src={avatar}  alt="..."/>
<h1>Work with top Professional <br /> Film makers</h1>
</div>
</div>

 <div class="col-4 col-md-4 col-lg-4">
    <div class="cards" data-aos="fade-up-right">
<img src={group}  alt="..."/>
<h1>Community of talents and <br /> creative minds</h1>
</div>
</div>

 <div class="col-4 col-md-4 col-lg-4">
    <div class="cards" data-aos="fade-up-right">
<img src={camera}  alt="..."/>
<h1>Work with Professional <br />equipments</h1>
</div>
</div>

</div>
</div>
    </div>
   
    <div className="section-3">
    <div className='row'>
        <div className='sub-section col-12 col-md-6 col-lg-6'>
<img src={camera2} alt="" />
</div>
<div className='col-12 col-md-6 col-lg-6'>
<div className='about py-5' data-aos="fade-up" data-aos-duration="3000">
    <h1>ABOUT COMPANY</h1>
    <h2>Talent station, where talents meets <span style={{ color:"red" }}>opportunity</span></h2>
    <p>Have you been in a depressing situation where you think your skill is not appreciated enough, due to lack of opportunities? <span className='brand-name'>{brandName}</span> connects you to your dream projects, actors and collaborations</p>
    <h3>Are you an inspiring actor? Screen writer? Director? Production crew members? <span className='brand-name'>{brandName}</span> is a bridge between you and your dream. </h3>
    <div className="button">
   <Link to="/RegistrationForm"><button>Become a Member</button></Link>
    <Link to="/Vision"><button style={{ backgroundColor:'red', border:"red", borderRadius:"30px" }}>Vision</button></Link>
    </div>
</div>
</div>
</div>
</div>
<Carousel/>
<Testimonials/>
<Questions/>
</div>
  )
}

export default MainSection