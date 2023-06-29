'use client'
import React from 'react'
import './booking.css'
import { useForm } from 'react-hook-form'

const Booking = () => {
  const { handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ()=> {
   alert(JSON.stringify(('Thank you!')))
  }
  
  return (
    <div className='booking'>
      <div className='booking-text' style={{
        backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/pictures/plane.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        position:'relative',
        paddingBottom: '3rem'
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form'>
            <p>From:</p>
            <div className='departureRoute'>
          <select>
                <option value=''>Select Airport &#128743;</option>
                <option value='Muritala Mohammed'>Muritala Mohammed</option>
                <option value='Nnamdi Azikiwe'>Nnamdi Azikiwe</option>
                <option value='Benin Airport'>Benin Airport</option>
                </select>
                <h6>{errors.departureRoute && <span style={{color: 'red', fontSize: '2rem'}}>The Route is required</span>}</h6>
                </div>

                <div className='departureDate'>
                  <input type="date"/>
                  {/* The Error Message */}
                  <h6>{errors.departureDate && <span style={{color: 'red', fontSize: '2rem'}}>The Date is required</span>}</h6>
                  </div> 

                <p className='arrival'>To:</p>

                <div className='arrivalRoute'>
                <select>
                <option>--Select Airport-- &#128743;</option>
                <option>--Muritala Mohammed--</option>
                <option>--Nnamdi Azikwe--</option>
                <option>--Benin Airport--</option>
                </select>
                <h6>{errors.departureDate && <span style={{color: 'red', fontSize: '2rem'}}>The Date is required</span>}</h6>
                </div>

                <div className='arrivalDate'>
                  <input type='date'/>
                  <h6>{errors.arrivalDate && <span style={{color: 'red', fontSize: '2rem'}}>The Date is required</span>}</h6>
                  </div>

                  <div className='person'>
                  <select>
                <option>--Persons-- &#129490;</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
                <h6>{errors.persons && <span style={{color: 'red', fontSize: '2rem'}}>Persons required</span>}</h6>
                </div>
                <button>Enter</button>
                </div>
        </form>

      </div>
    </div>
  )
}

export default Booking

