import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Collapasible.css"

const Collapasible = (props) => {
    const{eachArr}=props 
    const[isCollapased,setCollapsed]=useState(false);
    const navigate = useNavigate();
    const toggleCollapsible=() =>{
        setCollapsed(!isCollapased);
    };
    const handleBookNowlick=()=>{
        navigate('./booking');
        window.scrollTo(0,0);
    };

  return (
    <li className='collapse-list'>
     <div className='collapsible-button-container'>
        <button className='collapsible-button'onClick={toggleCollapsible}>
        {eachArr}
        </button>
     </div>
     {isCollapased && (
        <div className="content">
         <div className="flex-container">
          <ul className='carlists'>
            <li><p className='paragraph'>Toyota Innova:SGD 100</p></li>
            <li><p className='paragraph'>Toyota Alphard:SGD 138</p></li>
            <li><p className='paragraph'>Toyota Starex:SGD 138</p></li>
          </ul>
          <button className='Classicbookbutton'onClick={handleBookNowlick}>Book Now</button>
          </div>
    </div>
)}
    </li>

  );
}

export default Collapasible;
