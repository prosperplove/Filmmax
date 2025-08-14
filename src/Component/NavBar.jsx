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
        <Link to="/" style={{ textDecoration:"none", color:"white" }}> <img src={camera2} style={{ width:"60px" }} alt="" />
        <span className='brand-name'>Filmmax</span></Link></div>
       
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Vision">Mission</Link></li>
      <li><Link to="/SignUp">Login</Link></li>
    </ul>
  </nav>
    </div>
  )
}
// Remove-Item -Recurse -Force .git

export default NavBar