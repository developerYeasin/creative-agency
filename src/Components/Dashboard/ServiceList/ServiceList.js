import React from 'react';
import SideNav from '../SideNav/SideNav';
import Service from './Service/Service';
import './Service.css'

const ServiceList = () => {
    return (
      <div className="side-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 side-nav-color">
              <SideNav/>
            </div>
            <div className="col-md-9 ps-0 me-0 dash-container">
                <Service/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceList;