import React from 'react'
import { Link } from 'react-router-dom'
import script from "../images/slide3.jpg"
import director2 from "../images/slide2.jpg"
import operator from "../images/operator.jpg"
import crew from "../images/slide4.jpg"

const Carousel = () => {
  return (
    <div>
       <div className="team" style={{ textAlign:"center" }} data-aos="fade-up" data-aos-duration="3000">
        <p className='team-p'>HOW IT WORKS</p>
        <h2 className='team-h'>Join our <span style={{ color:"red" }}>community</span></h2>
    
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
       
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={operator} class="d-block w-100" alt="..."/>
      <h1>Directors</h1>
      <Link to="/Video"><button type="button" class="btn btn-outline-dark">Join Community</button></Link>
    </div>
    <div class="carousel-item">
      <img src={director2} class="d-block w-100" alt="..."/>
        <h1>Video-graphers</h1>
        <Link to="/Director"><button type="button" class="btn btn-outline-dark">Join Community</button></Link>
    </div>
    <div class="carousel-item">
      <img src={script} class="d-block w-100" alt="..."/>
        <h1>Script Writers</h1>
    <Link to="/Script"><button type="button" class="btn btn-outline-dark">Join Community</button></Link>
    </div>
      <div class="carousel-item">
      <img src={crew} class="d-block w-100" alt="..."/>
        <h1>Crew Members</h1>
          <Link to="/Crew"><button type="button" class="btn btn-outline-dark">Join Community</button></Link>
    </div>
  </div>
  <div className='next'>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
   </div>
    </div>
  )
}

export default Carousel
