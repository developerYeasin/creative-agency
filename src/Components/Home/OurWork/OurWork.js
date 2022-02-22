import React from "react";
import './OurWork.css';
import OurWorkSlider from "./Slider/Slider";

const OurWork = () => {
  return (
    <div className="our-work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="main-title">
              Here are some of <span>our works</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OurWorkSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
