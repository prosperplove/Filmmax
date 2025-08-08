import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import crew from "../images/crew1.jpg"
import crew3 from "../images/crew3.jpg"
import crew4 from "../images/crew4.jpg"
import crew5 from "../images/crew5.jpg"
import crew6 from "../images/crew6.jpg"
import crew7 from "../images/crew7.jpg"
import crew8 from "../images/crew8.jpg"
import EventForm from './EventForm'
import Questions from './Questions'
const Crew = () => {
  const brandName="Filmmax"
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
        <main>
  <div className='contain py-4'  style={{ backgroundColor:"rgb(196, 223, 212)", padding:"10px"}}>
    <div className="row">
      <div className='col-12 col-md-6 col-lg-6'  style={{ padding:"55px"}}>
      <h1 style={{ fontWeight:"600" }}>Team work makes <br /> the dream <span style={{ textDecoration:"underline green" }}>work!</span></h1>
      <p>Crew members are the engine room of every production. <br /> Working with purpose unitedly.
        Here at <span className='brand-name'>{brandName}</span> we breed <br /> you to be become that engine.
          <div>
          <Link to="/RegistrationForm"><button type="button" style={{ marginLeft:"10%" }} class="btn-dark">Become a member</button></Link>
          </div>
          </p>
          </div>
          <div className='col-12 col-md-6 col-lg-6'  style={{ padding:"55px"}}>
          <img src={crew} alt="" style={{ width:"100%", borderRadius:'25px'}} />
          </div>
          </div>
  </div>
     <div className="crew-meet" style={{textAlign:"center", backgroundColor:"rgb(227, 230, 228)"}}>
      <h2 style={{ fontWeight:"700" }}>Some memories from <span className='brand-name'>{brandName}</span> 2024 summer event </h2>
    
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={crew3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crew4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crew5} class="d-block w-100" alt="..."/>
    </div>
      <div class="carousel-item">
      <img src={crew6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={crew7} class="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src={crew8} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
<EventForm/>
<Questions/>
        </main>
    </div>
  )
}

export default Crew