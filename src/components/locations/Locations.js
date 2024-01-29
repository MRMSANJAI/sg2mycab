import React from "react";
import './Locations.css';
import sekinchan from '../../assets/sekinchan.jpg';
import mersing from '../../assets/mersing-1654740355.jpg';
import kuala from '../../assets/kuala-lumpur-1654740535.jpg';
import highlands from '../../assets/cameron-highland-1654740575.jpg';

const Locations = () => {
    return (
        <div className="location-container">
            <div className="sekinchan-container">
                <div className="content">
                    <h1 className="heading">SEKINCHAN : Abundant Farming Heaven</h1>
                    <p className="para">The name "Sekinchan" in Chinese translates to 'village ideal for cultivation'. The fertile land and favorable climate are perfect for cultivating rice, fruits, and oil palm trees. This area boasts the highest rice production per acre in Malaysia, making it a prime location for agriculture. The total farming land dedicated to paddy fields and fruits spans approximately 4,300 acres.</p>
                    <button className="bookbtn1">Book Now</button>
                </div>
                <img src={sekinchan} alt = "sekichan destination" className="destinations" />
            </div>

<div className="mersing-container">
<img src={mersing} alt = "mersing destination" className="destinations" />
<div className="content">
    <h1 className="heading">MERSING : Gateway to Natural Beauty and Heritage</h1>
    <p className="para">Situated on the east coast of the Malaysian state of Johor, Mersing town beckons as a portal to nature and rich cultural heritage. Its fame stems from the bustling passenger boat jetty, a launching point for daily boat excursions to an array of picturesque offshore islands.</p>
    <button className="bookbtn1">Book Now</button>
</div>
</div>

<div className="kuala-container">
                <div className="content">
                    <h1 className="heading">KUALA LUMPUR : Urban Marvel With Islamic Architecture</h1>
                    <p className="para">Kuala Lumpur, the vibrant capital of Malaysia, boasts a modern skyline dominated by the majestic Petronas Twin Towers. These iconic skyscrapers, standing tall at 451 meters, are adorned with elegant glass-and-steel architecture infused with intricate Islamic motifs. Visitors can explore the towers via a public skybridge and an observation deck, immersing themselves in the awe-inspiring cityscape.
</p>
                    <button className="bookbtn1">Book Now</button>
                </div>
                <img src={kuala} alt = "kuala lumpur destination" className="destinations" />
            </div>

<div className="cameron-container">
<img src={highlands} alt = "sekichan destination" className="destinations" />
<div className="content">
    <h1 className="heading">CAMERON HIGHLANDS : A Heaven For Nature Enthusiasts</h1>
    <p className="para">Cameron Highlands is a haven for nature enthusiasts seeking adventure and scenic pathways for exploration. Take a leisurely stroll and uncover special spots like the enchanting Mossy Forest, making it an ideal destination for those who appreciate the beauty of the natural world.</p>
    <button className="bookbtn1">Book Now</button>
</div>

</div>
        </div>
    );
}

export default Locations


