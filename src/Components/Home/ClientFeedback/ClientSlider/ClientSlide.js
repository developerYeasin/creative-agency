import React from 'react';

const ClientSlide = ({ review }) => {
  return (
    <div>
      <div className="client-slide-card">
        <div className="row">
          <div className="col-md-4">
            <img
              src={
                review.image &&
                ` data:image/png;charset=utf-8;base64,${review.image.img}`
              }
              alt=""
              className="client-slide-img"
            />
          </div>
          <div className="col-md-8">
            <h2>{review.name && review.name}</h2>
            <h5>{review.companyName && review.companyName}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="desc">{review.description && review.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSlide;