import React from 'react'
import { Link } from 'react-router-dom'
import camera from "../images/cameraIcon.jpg"
import camera2 from "../images/iconcamera.jpg"

const NavBar = () => {
  const brandName="Filmmax"
  return (
    <div>
   <nav className="navbar fixed-top">
    <div className="logo" style={{ color:"white", fontWeight:"bold",fontSize:"2rem" }}> 
       <Link to="/Home" class="navbar-brand" href="#"><img src={camera2} alt="" style={{ width:"10%", borderRadius:"10px" }}/><span className='brand-name' style={{ padding:'1vh' }}>{brandName}</span> </Link></div>
       
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul className="nav-links">
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/Vision">Mission</Link></li>
      <li><Link to="/SignIn">Login</Link></li>
    </ul>
  </nav>
    </div>
  )
}
// Remove-Item -Recurse -Force .git

export default NavBar