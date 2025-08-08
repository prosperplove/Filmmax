import React from 'react'
import NavBar from './Component/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainSection from './Component/MainSection'
import Video from './Pages/Video'

import Home from './Pages/Home'
import Director from './Pages/Director'
import Script from './Pages/Script'
import Footer from './Pages/Footer'
import Crew from './Pages/Crew'

import Vision from './Pages/Vision'
import RegistrationForm from './Pages/RegistrationForm'
import SignIn from './Pages/SignIn'

const App = () => {
  return (
   <Router>
    <div>
      <NavBar/>
    
      <Routes>
      <Route path='/' element={ <MainSection/>}></Route>
      <Route path='/Video' element={ <Video/>}></Route>
      <Route path='/Home' element={ <Home/>}></Route>
      <Route path='/Director' element={ <Director/>}></Route>
      <Route path='/Script' element={ <Script/>}></Route>
      <Route path='/Crew' element={ <Crew/>}></Route>
       <Route path='/Vision' element={ <Vision/>}></Route>
       <Route path='/RegistrationForm' element={<RegistrationForm/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
     </Routes>
    <Footer/>
    </div>
   
    </Router>
  )
}

export default App
