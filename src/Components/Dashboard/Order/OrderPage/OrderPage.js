import React from 'react';
import OrderForm from './OrderForm';

const OrderPage = () => {
    return (
      <div>
        <div className="d-flex bg-white justify-content-between">
          <h3>Order</h3>
          <h3>Yeasin Arafat</h3>
        </div>
        <div className="order-form">
          <OrderForm />
        </div>
      </div>
    );
};

export default OrderPage;