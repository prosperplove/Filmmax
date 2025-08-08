import React,{useEffect} from 'react'
import wall from "../images/wall6.jpg"
import ceo from "../images/ceo.jpg"
import ceo1 from "../images/ceo1.jpg"
import ceo2 from "../images/ceo2.jpg"
import quote from "../images/crew5.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'


const Vision = () => {
  const brandName="FILMMAX"
   useEffect(()=>{
  
    AOS.init({duration:"3000"});
  
    },[])
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
        <main>
          
           <div className='container-fluid' id='visionMission'  style={{ backgroundColor:"rgb(242, 248, 246)"}}>
    <div className="row">
       <div className='col-12 col-md-6 col-lg-6'>
          <img src={wall} alt=""/>
          </div>
      <div className='col-12 col-md-6 col-lg-6' data-aos="fade-up"  style={{ padding:"45px"}}>
      <h1>Our Vision:</h1>
      <p> <span style={{ fontSize:"1.5rem", color:"red" }}>"</span>To cultivate a globally interconnected  creatives ecosystem where every film professional, regardless of role or background, thrive through seamless collaboration, trusted community, and lifelong opportunity-empowering storytellers to shape cinema's future,together.<span style={{ fontSize:"1.5rem", color:"red" }}>"</span>
        </p>
        <h1>Who We Are:</h1>
        <p>We are more than just a film company — we are a hub for innovation, creativity, and connection. Our platform empowers filmmakers by providing resources, networking opportunities, and a supportive environment to bring their visions to life.</p>
        <h1>Our Mission:</h1>
        <p>To serve as a dynamic platform that fosters meaningful connections, nurtures creative collaboration, and unlocks opportunities for filmmakers worldwide. We aim to empower voices, share diverse stories, and inspire innovation in filmmaking.</p>
        <h1>What We Envision:</h1>
        <p><ul>
          <li>A Connected Global Network: Bridging geographical and industry gaps to unite filmmakers, writers, producers, and industry professionals in one collaborative space.</li>
          <li>A Hub for Inspiration & Learning: Offering resources, mentorship, workshops, and events that elevate skills and spark creativity.</li>
          <li>Opportunities for Growth: Providing access to funding, distribution channels, and collaborative projects that help stories reach audiences worldwide.</li>
           <li>Celebrating Diversity & Innovation: Encouraging stories from all backgrounds and fostering experimental approaches to filmmaking.</li>
          <li>A Supportive Community: Cultivating a culture of mutual support, mentorship, and shared passion that fuels continuous growth.</li>
          </ul></p>
          </div>
         
          </div>
  </div>
  <div className="mission-vision">
    <h1 style={{ padding:"0.2rem", fontSize:"1.5rem", fontWeight:"600", textAlign:"center"}}>Meet Our Compassionate Team</h1>
    <div className="container py-1" id=''>
           <div className='row'>
           <div class="col-12 col-md-4 col-lg-4">
           <div class="card">
           <img src={ceo} alt="..."/>
           <div className='ceo-details'>
          <h1>James Jackson</h1>
          <p>CEO,Founder</p>
          </div>
          </div>
   </div> 
      
      <div class="col-12 col-md-4 col-lg-4">
           <div class="card">
           <img src={ceo1} alt="..."/>
         <div className='ceo-details'>
          <h1>Mohammad jake</h1>
          <p>Event Manager</p>
          </div>
          </div>
   </div> 
    <div class="col-12 col-md-4 col-lg-4">
           <div class="card">
           <img src={ceo2} alt="..."/>
         <div className='ceo-details'>
          <h1>Rita Juliet</h1>
          <p>Bursar</p>
          </div>
          </div>
   </div> 

     </div>
   </div>
  </div>
  <section style={{ margin:"20px" }}>
      <div className="container" style={{  backgroundColor:"rgba(207, 152, 207, 1)", borderRadius:"50px", width:"100%"}}>
        <div className="quote">
            <p><span style={{ fontSize:"xx-large", color:"red" }}>"</span>The film industry is a magical world where dreams come alive on the screen, where stories have the power to transform,inspire, and unite people across cultures and generations. It’s a craft that demands passion, perseverance, and an unwavering belief in the power of storytelling. Every frame, every line, every scene is an opportunity to create something timeless—an echo of human experience that can move hearts and challenge minds.<span style={{ fontSize:"xx-large", color:"red" }}>"</span> ..... <span style={{ fontWeight:"600", fontSize:"large"}}>James Jackson</span> </p>
             </div>
          <div className="ceo">
     <img src={quote} alt="" style={{ width:"100%",padding: "0.5em 1em", borderRadius:"50px", borderBlockEndColor:"red"}}/>
         
        </div>
      </div>
  </section>
        </main>
    </div>
  )
}

export default Vision