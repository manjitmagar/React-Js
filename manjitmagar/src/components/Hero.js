
import React from 'react';

const Hero = () => {
  return (
    <div className="section-hero" id="call-me-home">
      <div className="container grid grid-two--cols">
        <div className="hero-content">
          <h1 className="hero-heading">Flow Sync Traffic Optimization</h1>
          <p className="hero-para">
            FlowSync Traffic Optimization is an Intelligent Traffic Management which leverages advanced computer 
            vision technology to dynamically adjust traffic signals, ensuring smoother 
            and more efficient traffic flow.
          </p>
          <div className="hero-btn">
            <a href="#section-contact--homepage" className="btn btn-white">Contact US</a>
          </div>
        </div>
        <div className="section-hero--img">
          <figure>
            <img src= "manjitmagar/src/components/images/trafficlight logo.png" alt="Traffic Light Logo" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
