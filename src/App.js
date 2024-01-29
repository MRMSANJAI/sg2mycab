import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home.js';
import About from './components/about/About';
import Service from './components/services/Service';
import Locations from './components/locations/Locations';
import Fleets from './fleets/Fleets';
// import Pricing from'./components/pricing/Pricing';
import Contact from './components/contact/Contact';
import  Footer  from './components/Footer/Footer.js';
import Booknow from './components/book now/Booknow';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/locations" element={<Locations />} /> 
          <Route path="/fleets" element={<Fleets />} />
          {/* <Route path="/pricing" element={<Pricing />} />  */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/booknow" element={<Booknow />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
