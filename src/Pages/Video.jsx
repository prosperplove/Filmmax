import React, {useEffect} from 'react'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import team from "../images/team.jpg"
import team2 from "../images/team2.jpg"
import team9 from "../images/team9.jpg"
import team8 from "../images/team8.jpg"
import team5 from "../images/team5.jpg"
import team6 from "../images/team6.jpg"
import { FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import Questions from './Questions'
import EventForm from './EventForm'
import Testimonials from './Testimonials'

const Video = () => {
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
      <div className="video">
        <video  width="100%" height="500" controls>
       <source  src={video2}  type='video/mp4' />
        </video>
      </div>
      <section className='main-section'>
      <div className='video-two py-4'>
        <h1>Meet Our Top VideoGraphers on <span className='brand-name'>{brandName}</span></h1>
      </div>
      <section>
       <div className="container py-4" id='video-four'>
        <div className='row'>
        <div class="col-12 col-md-6 col-lg-4">
        <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team} alt="..."/>
       <h5>Name: Oliver Riley</h5>
       <h5>Nationality: American</h5>
       <h5>Recent Project: House Of Dragon</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div> 
     <div class="col-12 col-md-6 col-lg-4">
    <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team6} alt="..."/>
       <h5>Ruth smith</h5>
       <h5>Nationality: British</h5>
       <h5>Recent Project: Midwife Series</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div>
 <div class="col-12 col-md-6 col-lg-4">
        <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team9}  alt="..."/>
       <h5>Olu jacob</h5>
       <h5>Nationality:Nigerian</h5>
       <h5>Recent Project: Book Of Life</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div>
 <div class="col-12 col-md-6 col-lg-4">
       <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team2}  alt="..."/>
       <h5>Name: Lin chan</h5>
       <h5>Nationality: Korean</h5>
       <h5>Recent Project: Squid Game</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div>
 <div class="col-12 col-md-6 col-lg-4">
       <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team5}  alt="..."/>
       <h5>Name: Emily Elizabeth</h5>
       <h5>Nationality: American</h5>
       <h5>Recent Project: Straw</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div>
 <div class="col-12 col-md-6 col-lg-4">
        <div class="cards" data-aos="fade-up" data-aos-duration="3000">
        <img src={team8}  alt="..."/>
       <h5>Name: Lily jean</h5>
       <h5>Nationality: American</h5>
       <h5>Recent Project: New York Series</h5>
       <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
        <a href="https://twitter.com/prosperpLove" target='_blank' rel='noopener noreferrer'>
         <FaTwitter/>Follow
         </a>
      </div>
</div>
</div>
 </div>
     
  </section>
  </section>
   <Testimonials/>
   <EventForm/>
<Questions/>

</main>
    </div>
  )
}

export default Video
