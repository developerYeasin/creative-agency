import React from 'react';
import SideNav from '../SideNav/SideNav';
import ReviewPage from './ReviewPage/ReviewPage';

const Review = () => {
    return (
      <div className="side-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 side-nav-color">
              <SideNav />
            </div>
            <div className="col-md-9 ps-0 me-0 dash-container">
                <ReviewPage/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;