import React from 'react';
import ReviewForm from './ReviewForm';

const ReviewPage = () => {
    return (
      <div>
        <div className="d-flex bg-white justify-content-between">
          <h3>Review</h3>
          <h3>Yeasin Arafat</h3>
        </div>
        <div className="order-form">
          <ReviewForm/>
        </div>
      </div>
    );
};

export default ReviewPage;