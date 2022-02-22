import React from 'react';
import SideNav from '../SideNav/SideNav';
import OrderPage from './OrderPage/OrderPage';
import './Order.css'

const Order = () => {
    return (
      <div className="side-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 side-nav-color">
              <SideNav />
            </div>
            <div className="col-md-9 ps-0 me-0 dash-container">
              <OrderPage/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Order;