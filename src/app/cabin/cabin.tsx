'use client'
import React from 'react'
import './cabin.css'
import {motion} from 'framer-motion'
const Cabin = () => {
  return (
    <motion.div
    animate={{x: [-50, -150, 50], opacity:1}}
     transition={{duration: 5, delay: 3, easeIn:[0.3]}}
     initial={{opacity:0}}
    className='cabin'>
        <div className='cabin-text'>
            <div className='cabin-line'></div>
                <h5>Sky Seattle</h5>
                <h1>Overhead bin space</h1>
                <p>Unless you’re traveling with small children or otherwise need extra time,
                     it seems the only reason folks board right away is to secure bin space.</p>
                     <p>Delta proactively and aggressively blocks first class bins for first class passengers. 
                        Some American flight attendants will take it upon themselves to do the same, but it’s definitely not consistent.</p>
                        <p>I’ve also found that Delta agents are much more insistent during the pre-boarding announcements that unneeded carry-on bags should be checked. 
                            Like, multiple announcements, even on flights that aren’t full.</p>
                            <button>Read More</button>   
                      </div>
                      <img src='/pictures/cabin.jpg' alt=''/>
    </motion.div>
  )
}

export default Cabin
