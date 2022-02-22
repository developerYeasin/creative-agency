import React from 'react';

const SliderItem = ({ slide }) => {
  return (
    <div className="slide-item">
      <img src={slide && slide.img} alt="" className='w-100'/>
    </div>
  );
};

export default SliderItem;