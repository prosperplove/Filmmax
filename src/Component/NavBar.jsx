import React from 'react'
import { Link } from 'react-router-dom'
import camera from "../images/cameraIcon.jpg"
import camera2 from "../images/iconcamera.jpg"

const NavBar = () => {
  const brandName="Filmmax"
  return (
    <div>
       <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <Link to="/Home" class="navbar-brand" href="#"><img src={camera2} alt="" style={{ width:"10%", borderRadius:"10px" }}/><span className='brand-name' style={{ padding:'1vh' }}>{brandName}</span> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/Home" class="nav-link active" aria-current="page" href="#" style={{margin:"20px"}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/Vision" class="nav-link" href="#" style={{margin:"20px"}}>Mission</Link>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-outline-danger"> <Link to="/SignIn" class="nav-link" style={{borderRadius:"10px", color:"red"}} href='#'>Login</Link></button>
       
        </li>
      </ul>
    </div>
  </div>
</nav>
  
    </div>
  )
}
// Remove-Item -Recurse -Force .git

export default NavBar