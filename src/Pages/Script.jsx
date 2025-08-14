import React,{useEffect} from 'react'
import script from "../images/script3.jpg"
import scriptOne from "../images/scriptOne.jpg"
import { Link } from 'react-router-dom'
import one from "../images/passport.jpg"
import two from "../images/passport2.jpg"
import three from "../images/passport3.jpg"
import four from "../images/passport4.jpg"
import five from "../images/passport5.jpg"
import { FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import Questions from './Questions'
import EventForm from './EventForm'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const Script = () => {
    const brandName='FILMMAX'
     useEffect(()=>{
    
      AOS.init({duration:"3000"});
    
      },[])
       useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <main>
       
      <div className="container-fluid py-4" style={{ background:"linear-gradient(to top,rgb(151, 146, 146),  rgb(250, 249, 247))"}} id='script-page'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
      <img src={script} alt="" style={{ width:"100%", borderRadius:'10px', paddingTop:"60px"}}/>
      </div>
      <div className='col-12 col-md-6 col-lg-6'>
      <div className='script'  data-aos="fade-up" style={{ margin:"65px" }}>
      <h1>Inspire young minds,<br />shape the future</h1>
        <p style={{ fontSize:'x-large', fontWeight:"500",backgroundColor:"plum", display:"inline-block", borderRadius:"5px" }}>STORY TELLING</p>
        <h1 style={{ fontSize:"xx-large", fontWeight:"bold" }}>Share your story</h1>
        <p style={{ fontSize:"medium" }}>Join global network of story tellers</p>
        <Link to="/RegistrationForm"><button type="button" class="btn-dark">Become a member</button></Link>
      </div>
      </div>
          </div>
      </div>

      <div className="script-sub"  style={{ backgroundColor:"rgb(43, 40, 40)", color:"white"}}>
        <div  data-aos="fade-up">
        <h2 style={{ fontWeight:"700", textAlign:"center"}}>Building trust through real<br /> experiences</h2>
        <p style={{ fontSize:"x-large", textAlign:"center" }}>Creating contents that speaks life when reading. create life, create purpose.</p>
     </div>
      <div className="script-sub2" style={{ justifyContent:"center", display:"flex" }} id='script-page'>
        <button type="button" class="btn btn-danger"  data-aos="fade-up">Quotes</button>
         </div>
         <div className="card-container" id='script-page'>
          <div className='row'>
           <div class="col-6 col-md-4 col-lg-4">
          <div class="card" data-aos="flip-left">
        <img src={one}  alt="..."/>
       <h5>Stella Ellot</h5>
       <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
      Storytelling is a powerful tool for communication, connection, and even survival. It can be used to share knowledge, inspire, motivate, and shape understanding of the world
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
       <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
      </div>
</div>
  <div class="col-6 col-md-4 col-lg-4">
     <div class="card" data-aos="flip-left">
        <img src={two}  alt="..."/>
       <h5>Ela Rose</h5>
        <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
     Inside each of us is a natural-born storyteller, waiting to be released.After nourishment, shelter and companionship, stories are the thing we need most in the world.
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
       <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
      </div>
</div>
  <div class="col-6 col-md-4 col-lg-4">
   <div class="card" data-aos="flip-left">
        <img src={three}  alt="..."/>
   <h5>Thomas Jackson</h5>
    <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
     Stories constitute the single most powerful weapon in a leader’s arsenal. Great stories happen to those who can tell them.
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
        <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
  </div>
</div>
<div class="col-6 col-md-4 col-lg-4">
   <div class="card" data-aos="flip-left">
        <img src={four}  alt="..."/>
   <h5>Ella Comfort</h5>
    <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
      Marketing is no longer about the stuff that you make, but about the stories you tell
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
      <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
  </div>
</div>
<div class="col-6 col-md-4 col-lg-4">
   <div class="card" data-aos="flip-left">
        <img src={five}  alt="..."/>
   <h5>Prosper web3</h5>
    <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
      The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
       <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
  </div>
</div>
<div class="col-6 col-md-4 col-lg-4">
   <div class="card" data-aos="flip-left">
        <img src={three}  alt="..."/>
   <h5>Ola james</h5>
    <p><span style={{ color:"red", fontSize:"xx-large" }}>"</span>
      Narrative imagining — story — is the fundamental instrument of thought. Rational capacities depend upon it. It is our chief means of looking into the future, or predicting, of planning, and of explaining.
      <span style={{ color:"red", fontSize:"xx-large" }}>"</span>
       </p>
       <div style={{ textAlign:"center", color:"gold" }}>
       <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
       </div>
  </div>
</div>

</div>
</div>
 </div>

 <div className="contain" style={{  backgroundColor:"rgb(219, 219, 181)", paddingTop:"2vh"}} id='script-page'>
  <div className="row">
  <div className='col-12 col-md-6 col-lg-6'>
    <img src={scriptOne} alt="" style={{ borderTopRightRadius:"50px", height:"100%", width:"100%" }} />
  </div>
  <div className='col-12 col-md-6 col-lg-6' data-aos="fade-up" style={{ padding:"45px"}}>
    <h1>Engaging and fun learning <br /> in a nurturing environment</h1>
    <p>Join thousands of story tellers in our upcoming <span className='brand-name'>{brandName}</span> 2026 summer event.
    come let's make history together.
 </p>
  </div>
  </div>
 </div>
   <EventForm/>
 <Questions/>
 
 </main>
    </div>
  )
}

export default Script
