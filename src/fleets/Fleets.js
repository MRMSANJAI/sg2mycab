import React from 'react'
import './Fleets.css'
import backgroundimg from '../../src/assets/matt-nelson-dCNGrp_0GyM-unsplash.jpg'
import innova from '../../src/assets/Toyota-Innova-Hycross-Price-Images-Reviews-Specs-and-Features-removebg-preview.png'
import alphard from '../../src/assets/toyota-alphard-1538032589-removebg-preview.png'
import starex from '../../src/assets/starex-exterior-hyper-silver-removebg-preview.png'
import innovablack from '../../src/assets/toyota-innova.png'
import elegant from '../../src/assets/alphard_ogp_02-removebg-preview.png'

const Fleets = () => {
    const imgContainerStyle = {
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div className='fleets-container'>
            <div className='img-container' style={imgContainerStyle}>
                <div className='img-heading'>    
                <h1 className='heading-fleet'>FIND THE ULTIMATE BARGAINS</h1>
                </div>
            </div>

            <ul className='car-display'>
                <li className='fleet-list'>
                  <img src={innova} alt="innovacar" className='fleet-img' width={350}/>
                  <h1 className='innova-title'>Toyota Innova</h1>
                </li>

                <li className='fleet-list'>
                  <img src={alphard} alt="alphardcar" className='fleet-img' width={350}/>
                  <h1 className='fleet-title'>Toyota Alphard</h1>
                </li>

                <li className='fleet-list'>
                  <img src={starex} alt="starexcar" className='fleet-img' width={350}/>
                  <h1 className='fleet-title'>Hyundai Starex</h1>
                </li>
            </ul>

            <div className='innova-container'>
              <div className='img-container'>
                <img src={innovablack} alt="blackcolorinnova" className='car-img' />
              <div className='content-container'>
                <h1 className='heading-car'>Toyota Innova</h1>
                <h4 className='heading-sub'>7 SEATER LUXURY CAR</h4>
                <p className='description'>The Toyota Innova is a basic size MPV popular as limos throughout Asia. The Innova provides strong frame and ladder framework, dependability, big seating capability and ease of service. The big travel luggage ability makes it great for airport transfers and cross border transfers in between Singapore and Malaysia.</p>
                <ul className='desc-list'>
                    <li className='detail-list'>
                        <h1 className="no-heading">5</h1>
                        <h4 className="wo-heading">Passengers</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">3</h1>
                        <h4 className="wo-heading">Luggages</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">Doors</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">7</h1>
                        <h4 className="wo-heading">SRS Airbags</h4>
                    </li>
                </ul>
              </div>
            </div>
            </div>

            <div className='alphard-container'>
              <div className='img2-container'>
                <img src={elegant} alt="alphardgold" className='car2-img' />
              <div className='content2-container'>
                <h1 className='heading-car'>Elegant Transcendence</h1>
                <h4 className='heading-sub'>8 SEATER LUXURY CAR</h4>
                <p className='description'>The Elegant Transcendence is a premium 8-seater MPV that exudes opulence and comfort, redefining travel standards. Highly favored as the quintessential limousine across Asia, this vehicle seamlessly blends robust security features, exceptional spaciousness, and luxury, setting it apart from ordinary MPVs. Its capacious luggage capacity makes it the ultimate choice for airport transfers and hassle-free cross-border journeys between Singapore and Malaysia. Experience transcendent travel like never before with the Elegant Transcendence</p>
                <ul className='desc-list'>
                    <li className='detail-list'>
                        <h1 className="no-heading">8</h1>
                        <h4 className="wo-heading">Passengers</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">Luggages</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">Doors</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">7</h1>
                        <h4 className="wo-heading">SRS Airbags</h4>
                    </li>
                </ul>
              </div>
            </div>
            </div>

            <div className='innova-container'>
              <div className='img-container'>
                <img src={starex} alt="starexcar" className='starex-car' />
              <div className='content-container'>
                <h1 className='heading-car'>Hyundai Starex</h1>
                <h4 className='heading-sub'>10 SEATER LUXURY CAR</h4>
                <p className='description'>The Opulent Odyssey, embodied by the Hyundai Starex, stands as the ultimate symbol of elegance, style, and versatility. With a capacity to comfortably seat up to 10 passengers or accommodate 7 passengers along with 2 substantial luggage pieces and 4 convenient hand-carry items, it redefines the concept of spacious travel. Whether for family adventures or transporting large groups, the Opulent Odyssey is your ideal choice, ensuring a luxurious and comfortable journey for all.</p>
                <ul className='desc-list'>
                    <li className='detail-list'>
                        <h1 className="no-heading">10</h1>
                        <h4 className="wo-heading">Passengers</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">Luggages</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">Doors</h4>
                    </li>
                    <li className='detail-list'>
                        <h1 className="no-heading">4</h1>
                        <h4 className="wo-heading">SRS Airbags</h4>
                    </li>
                </ul>
              </div>
            </div>
            </div>
            
        </div>
    );
}

export default Fleets