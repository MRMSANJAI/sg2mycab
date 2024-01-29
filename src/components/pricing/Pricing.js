import React from 'react';
import { useState , useEffect } from 'react';
//import axios from"axios";
import{collapse} from './Collapasiable';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';
const Pricing = () => {
    const [pricingArr, setPricingArr] = useState([]);
    const [openCollapsible, setOpenCollapsible] = useState(null); // State to track open collapsible item
    const navigate = useNavigate();

    const toggleCollapsible = (index) => {
       
        if (openCollapsible === index) {
            setOpenCollapsible(null); // Close the currently open collapsible
        } else {
            setOpenCollapsible(index); // Open the clicked collapsible
        }
    };

    const handleBookNowClick = () => {
        navigate('/booking');
        window.scrollTo(0, 0);
    };
    return (
    <div className="page">
        <div className="pricing-bg-container">
            <div className="pricing-top-container">
             <h1 className="pricing-heading">UNBEATABLE AFFORDABILITY</h1>
             <h4 className="pricing">We take pride in offering the most unbeatable rates for your journeys between Singapore and Malaysia, departing from your chosen locations at your preferred times. Your cost-effective and convenient travel experience begins with us.</h4>  
            </div> 
          <ul className="pricing-list-container">
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>SENAI AIRPORT</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>KSL CITY MALL</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>LEGO LAND JOHAR BAHRU</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>JOHAR PREMIUM OUTLET</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>SG-JB/SG-JB 1 DAY TRIP</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>JOHAR BHARU AREA</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>KUKUP</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>MALACCA</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>MERSING</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>DESARU</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>PORT DICKSON</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>KUALA LUMPUR</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>SEKINCHAN</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>GENTING HIGHLAND</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>KLUNAGU/BATU PHAT/YONG PENG JOHAR</button>
                </div>
            </li>
            <li className="list-item">
                <div className="button-container">
                 <button className='button'>PULAU TIOMAN</button>
                </div>
            </li>
          </ul>  
        <button className='classicbookbtn' onClick={handleBookNowClick}>Book Now</button>     
        </div>
    </div>
    );
}
export default Pricing