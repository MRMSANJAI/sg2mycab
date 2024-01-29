import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer>
    <article>
      <h2>Try Sg2mycab For your Travel.</h2>
      <button> <p>Contact Us</p> </button>
    </article>

    <section class="top">
    <ul>
        <li>
        <h3 className='logoname'>Sg2mycab</h3>
         <p>At Sg2mycab Express, we provide reliable, safe, and budget-friendly MVP Private Car services for travelers heading from Singapore to Johor Bahru, Legoland Malaysia, and numerous other destinations across Malaysia. Your trusted partner for seamless and cost-effective journeys.</p>
        </li> 
        
     <li>
         <div className='classes'>
         <Link to="/home">
                <p>HOME</p>
              </Link>
              <Link to="/about">
                <p>ABOUT</p>
              </Link>
              <Link to="/services">
                <p>SERVICES</p>
              </Link>
              <Link to="/locations">
                <p>LOCATIONS</p>
              </Link>
              <Link to="/fleets">
                <p>FLEETS</p>
              </Link>
              <Link to="/pricing">
                <p>PRICING</p>
              </Link>
              <Link to="/contact">
                <p>CONTACT</p>
              </Link>
              </div> 
        </li>

        <li>
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faPhone} className="me-2" />+(65)82335292</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />316C Anchorvale Link 05 - 209 <br/>Anchorvale Gardens<br/>Singapore<br/>543316</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="me-2" />flynewtours@gmail.com</p>
        </li>
      </ul>
    </section>

    <section class="bottom">Copyrights©2023.Developed by DigiSailor </section>
  </footer>

  );
}

export default Footer;
