import React from 'react';

const ServicesCard = ({ service }) => {
  return (
    <div className="col-md-4">
      <div className={service.active ? "services-card text-center active" : "services-card text-center "}>
        <img src={service.img} alt="" />
        <h4 className="services-card-title">{service.title}</h4>
        <p className="services-card-des">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;