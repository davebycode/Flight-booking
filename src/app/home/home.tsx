import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJetFighterUp } from '@fortawesome/free-solid-svg-icons'
import './home.css'

const HomePage = () => {
  return (
      <div className='home'>
        <img  src='/pictures/flight.png' alt=''/>
      <div className='home-text'>
   <h1>Chi <b>D...</b><FontAwesomeIcon icon={faJetFighterUp}/></h1>
   <div className='text'>
    <h1>Book a private jet instantly</h1>
    <h5>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.</h5>
    <div className='button'>
    <button> <i className="fa-solid fa-chevron-right"></i>  Request a trip</button>
    <h5>Request Quote <i className="fa-solid fa-arrow-right"></i></h5>
    </div>
   </div>
   </div>
   </div>
    
  )
}

export default HomePage
