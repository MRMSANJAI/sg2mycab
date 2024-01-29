import React, { useEffect, useState,useMemo } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import citypic from "../../assets/city.jpeg";
import driverpic from "../../assets/driver.png";
import bluecar from "../../alphard-blue.png";
import whitecar from "../../alphard-white.png";


function Home() {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = index => {
        console.log("Button clicked for index:", index);
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            console.log("Updated activeIndex:", activeIndex)
        }
    };

    const accordianData = [
         'SENAI AIRPORT',
          'KSL CITY MALL',
         'LEGOLAND JOHOR BAHRU',
         'JOHOR PREMIUM OUTLET',
         'SG-JB/SG-JB 1DAY TRIP',
          'JOHOR BHARU AREA',
         'KUKUP',
         'MALACCA'
    ];

    const accordianContent = `
     Toyota Innova : SGD 100
     Toyota Alphard : SGD 130
     Hyundai Starex : SGD 130
    `;

    const [currentImage, setCurrentImage] = useState(0);

    const images = useMemo(() => [
        bluecar,
        whitecar,
    ], []);
     
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentImage, images]);

    return (
        <div className="home">
            <div className="homepage">
        <h1 className="animated-heading">EXPLORE DESTINATIONS,<br/> WITH DISTINCTIONS</h1>
        </div>

        <div>
            <img className="pic" src={citypic} alt="cityimage" />
        </div>

        <div className="malbay-intro">
            <h2 className="malbay-name">MALBAY EXPRESS TRANSPORT SOLUTIONS</h2>
            <p className="about-malbay">TrueWay Transport Solutions seamlessly connects Singapore to prime Malaysian spots like Johor Bahru and Legoland. Catering to diverse traveler needs, our MVP Private Car services offer safety, comfort, and affordability for individuals, families, and groups. With premium vehicles and skilled drivers, we ensure every journey transcends mere travel. Trust TrueWay for unparalleled transport solutions.</p>
            <button className="info">Get Info</button>
        </div>

        <div className="bgpic2">
          <img className="pic2" src={driverpic} alt="driverpic" />
        </div>

        <div className="fleet-outer">
            <div className="fleet-container">
                <div className="fleet-text">
                    <h2>Our Elite Fleet <br/> BRIDGING SINGAPORE AND MALAYSIA</h2>
                    <p>Journey in elegance and comfort with our premium MPVs. Each vehicle in our collection is diligently maintained, ensuring not just punctuality but also an immaculate presence. Experience the blend of luxury and reliability, every mile of the way.</p>
                </div>
                <div className="fleet-img">
                  <img className="car1" src={bluecar} alt="bluecar" />
                  <img className="car2" src={whitecar} alt="whitecar" />
                </div>
            </div>
            <button className="booknow-btn">Book Now</button>
        </div>

        <div className="package-wrapper">
            <h2 className="package">Our Packages</h2>
            <div className="package-buttons">
              {accordianData.map((item, index) => (
                <div key={index} className={`accordian-item ${activeIndex === index ? 'open' : ''}`}>  <button onClick={() => toggleAccordion(index)} className="accordian-title">{item}</button>
                    {activeIndex === index && (
                        <div className="package-content">
                            <pre>{accordianContent}</pre>
                        </div>
                    )}
                    </div>
              ))}
            </div>
            <Link to='/pricing'>  <button className="know-more-btn">Know More</button></Link>
        </div>

        <div className="content-wrapper">
            <h3 className="heading3">THE PERFECT SEAT</h3>
            <div className="h3-wrapper">
                <div className="line"></div>
                <h1 className="headingfleet">OUR FLEET</h1>
                <div className="line"></div>
            </div>
            <p className="para">Upholding the highest standards of safety, maintenance, and aesthetics, our diverse fleet boasts only the newest models of luxury sedans, SUVs, minibuses, and coaches. Explore our curated selection tailored to your preferences.</p>
        </div>

        <div className="slider-container">
            <img src={images[currentImage]} alt='toyota' className="slider-image" />
        </div>


        </div>


    );
}

export default Home;