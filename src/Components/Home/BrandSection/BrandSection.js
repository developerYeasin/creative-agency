import React from 'react';
import slack from '../../../images/logos/slack.png'
import airbnb from "../../../images/logos/airbnb.png";
import netflix from '../../../images/logos/netflix.png'
import uber from '../../../images/logos/uber.png'
import google from "../../../images/logos/google.png";

const BrandSection = () => {
    return (
      <div className="brand-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="all-brand">
                <img src={slack} alt="" />
                <img src={airbnb} alt="" />
                <img src={netflix} alt="" />
                <img src={uber} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandSection;