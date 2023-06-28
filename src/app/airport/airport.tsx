'use client'
import React from 'react'
import './airport.css'
import {motion as dave} from 'framer-motion'
const Airport = () => {
  return (
    <dave.div
    animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }} 
    className='airport'>
        <div className='airport-stuff' style={{
          backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/pictures/airport.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '40vh',
          position:'relative'
        }}>
          <div className='airport-names'>
            <h4> <b>250</b> <br/> Aircraft</h4>
            <h4><b>600</b> <br/> Employees</h4>
            <h4><b>60</b><br/> Winning</h4>
            <h4><b>2.5m</b> <br/> Passengers</h4>
          </div>
        </div>
    </dave.div>
  )
}

export default Airport
