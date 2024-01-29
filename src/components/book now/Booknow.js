import React, { useState } from 'react'
import './Booknow.css'
import location from '../../../src/assets/pexels-pok-rie-4847085.jpg'

const Booknow = () => {
    const locationImg = {
       backgroundImage: `url(${location})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '70vh',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
    };
    
    const LocationDescription= [
         'Toyota Innova: SGD 1',
         'Toyota Alphard: SGD 1',
         'Hyundai Starex: SGD 13',     
    ]  
    
    return (
        <div className='location-container'>
            <div className='location-img' style={locationImg}>
                <div className='location-heading'>
                    <h1 className='location'>SELECT A LOCATION</h1>
                </div>

            </div>
        </div>
    );
}

export default Booknow