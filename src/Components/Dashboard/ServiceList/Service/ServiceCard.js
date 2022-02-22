import React from 'react';
import icon1 from '../../.../../../../images/icons/service1.png'

const ServiceCard = () => {
    return (
      <div className="col-md-6">
        <div className="service-card">
          <img src={icon1} alt="" />
          <h3>Web & Mobile design</h3>
          <p>
            We craft stunning and amazing web UI, using a well drrafted UX to
            fit your product.
          </p>
          <span className="serivce-card-status">Pending</span>
        </div>
      </div>
    );
};

export default ServiceCard;