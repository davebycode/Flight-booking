import React from 'react'
import './landing.css'
const Landing = () => {
    const src= '/pictures/one.mp4'
  return (
    <div className='landing'>
        <h1>Your safety is our priority!</h1>
    <video loop muted autoPlay controls src={src} className='background'/>
    </div>
  )
}

export default Landing
