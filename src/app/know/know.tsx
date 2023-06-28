'use client'
import React from 'react'
import './know.css'
import {motion as dave} from 'framer-motion'
const Know = () => {
  return (
    <dave.div 
    animate={{x: [-50, -150, 50], opacity:1}}
    transition={{duration: 5, delay: 1, easeIn:[0.3]}}
    initial={{opacity:0}}
    className='know'>
        <div className='know-text'>
            <div className='line'></div>
      <h5>Get to know us </h5>
      <h1>OnBoard Amenities</h1>
      <p>If you’re flying first class on Chi D, you’ll board to find a small bottle of water, a packaged blanket, and a pillow at your seat. Even on a regional jet.</p>
        <p>Unless you’re flying a premium transcon route, American doesn’t stock pillows, but each seat will have a blanket.</p>
        <p>Both airlines advertise pre-departure beverages, but American flight attendants don’t like to serve them. My Delta crews have been great about offering drinks during boarding, and will generally take “once we’re in the air” orders ahead of time as well.</p>
        <button>Read More</button>
      </div>
      <img src='/pictures/know.jpg' alt=''/>
    </dave.div>
  )
}

export default Know
