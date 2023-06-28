import React from 'react'
import './lounge.css'
const Lounge = () => {
  return (
    <div className='lounge'>
        <img src='/pictures/lounge.jpg' alt=''/>
        <div className='lounge-text'>
            <div className='lounge-line'></div>
            <h5>Sky Seattle</h5>
            <h1>Lounges</h1>
            <p>American’s Flagship lounges and dining are vastly better than anything Delta has to offer, 
                but most people, most of the time, are just going to be using the standard SkyClubs and Admirals Clubs.</p>
                <p>The caliber of the lounges varies dramatically with both airlines. 
                    Some, like the Seattle SkyClub, are either newly constructed or recently refurbished, with bright spaces and updated furniture.</p>
                    <button>Read More</button>            
        </div>
      
    </div>
  )
}

export default Lounge
