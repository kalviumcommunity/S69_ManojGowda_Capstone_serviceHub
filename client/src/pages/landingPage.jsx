import React from 'react'
import NavBar from '../components/navBar'
import bgImage from '../assets/bg.jpeg'
import '../App.css'
// import './LandingPage.css'

function LandingPage(){
  return(
    <div>

    {/*  <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover h-screen w-full" > */}
    <NavBar/>
        <div className='watermark '>
          <img src={bgImage}/>
    Arav
    </div>
 </div>
  )
}

export default LandingPage;