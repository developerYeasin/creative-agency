import React from 'react';
import './Services.css'
import services1 from '../../../images/icons/service1.png'
import services2 from '../../../images/icons/service2.png'
import services3 from '../../../images/icons/service3.png'
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = [
      {
        img: services1,
        title: "Web & Mobile design",
        desc: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      },
      {
        img: services2,
        title: "Graphic design",
        desc: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
        active: true,
      },
      {
        img: services3,
        title: "Web development",
        desc: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      },
    ];
    return (
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="main-title">
                Provide awesome <span>services</span>
              </h2>
            </div>
          </div>
          <div className="row">{services && services.map((service, i) => <ServicesCard key={i} service={service}/>)}</div>
        </div>
      </div>
    );
};

export default Services;