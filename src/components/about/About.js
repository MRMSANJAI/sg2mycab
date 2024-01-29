import React from 'react';
import './About.css';
import { Link,useNavigate} from "react-router-dom";
import bluecar from '../../alphard-blue.png';
import whitecar from '../../alphard-white.png';
import {MdOutlineHealthAndSafety} from "react-icons/md";
import {BsAlarm} from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";

function About() {
   const navigate = useNavigate();
 const handleKnowmore=()=>{
     navigate('/booking');
     window.scrollTo(0, 0);
 }
 const handleServices=()=>{
         navigate('/services');
     window.scrollTo(0, 0);
}
  return (
    <div className="page">
        <div className="about-container">
            <div className="transport-container">
                <div className="welcome">
                    <h1 className="welcome-heading">Welcome to Sincere Transport Services</h1>
                      <p className="welcome-desc">Sincere Transport Services offers a dependable, secure, and budget-friendly MVP Private Car service, catering to travel between Singapore and Johor Bahru, Legoland Malaysia, as well as various other destinations in Malaysia.
                        <span className="welcome-span"> Our range of private transport options is designed to meet the unique needs of every traveler, providing private transfers and hire-with-driver services for individuals, families, groups,
                        and both leisure and business travelers.All our transport services include a dedicated driver, ensuring a seamless and enjoyable journey.</span>     
                      </p>
                        <button type="button"class="Know-more-bt">KNOW MORE</button>  
                </div> 
                     <img src={whitecar} alt="car" width={450} style={{marginBottom:"45px"}} className="about-car-img" />
                </div>

                <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                    <img src={bluecar} alt="xc" className='half-image' width={300} height={180} style={{marginTop:"40px",borderRadius:"10px",marginRight:"50px",marginBottom:"60px"}}/>
                </div>

                <div className="travel-container">
                    <div className="choose-container">
                        <h1 className="heading">WHY CHOOSE OUR TRAVEL SERVICES</h1>
                        <p className='travel'>At Sincere Transport service. We are continuously investing in eco-friendly practices and technologies to reduce our carbon footprint,ensuring that every family's visit to Legoland Malaysia is both accessible and enjoyable.</p>
                    </div>

                <ul className="list-container">
                    <li className="list-item-container">
                        <MdOutlineHealthAndSafety className='safety-icon'/> 
                        <h1 className="safety-heading">Your Safety is our Priority</h1>
                        <p className="safety">At Sincere Transport Services,ensuring the safety and comfort of passengers is crucial.We adhere to the highest road safety standards to ensure the well-being and security of all passengers throughout their journey.</p>
                    </li>
                    <li className="list-item-container">
                        <BsAlarm className='safety-icon'/> 
                        <h1 className="safety-heading">Punctuality</h1>
                        <p className="safety">At Sincere Transport Services,Passengers and shippers rely on transport services to get them to their destinations as scheduled.</p>
                    </li>
                    <li className="list-item-container">
                        <FaTrophy className="safety-icon"/>
                        <h1 className="safety-heading">Quality Service, Fair Prices</h1>
                        <p className="safety">At Sincere Transport Service, Fair and competitive pricing means that the cost of services is reasonable and in line with market standards. It reflects the value provided to customers.</p>
                         </li>
                </ul>
                    <div className="service-container">
                        <button type='button'onClick={handleServices} className="Know-more-btn">VIEW SERVICES</button>
                    </div>
            </div>
        </div>
     </div>   
  );
  }

export default About;

