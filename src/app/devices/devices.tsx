'use client'
import React from 'react'
import './devices.css'
import {motion as dave} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faBowlRice } from '@fortawesome/free-solid-svg-icons'

const Devices = () => {
  return (
    <dave.div
          className='devices'>
        <div className='devices-stuff'>
            <div className='devices-names'>
                <h4><FontAwesomeIcon className="fa-mobile-screen-button" icon={faMobileScreenButton} style={{color: 'red'}}/><br/>Mobile apps</h4>
                <h4><FontAwesomeIcon className="fa-credit-card" icon={faCreditCard} style={{color: 'green'}}/><br/>Outlets</h4>
                <h4><FontAwesomeIcon className="fa-wifi" icon={faWifi} style={{color: 'white'}}/><br/> Connections</h4>
                <h4><FontAwesomeIcon className="fa-bowl-rice" icon={faBowlRice} style={{color: 'pink'}}/><br/> Lounges</h4>

            </div>

        </div>
      
    </dave.div>
    
  )
}

export default Devices
