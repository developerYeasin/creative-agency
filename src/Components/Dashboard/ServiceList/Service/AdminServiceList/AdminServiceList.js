import React, { useEffect, useState } from "react";
import './AdminSerivceList.css'

const AdminServiceList = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data.result));
  },[])
  return (
    <div>
      <h1>AdminServiceList</h1>
      <div className="service-list-table">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Project Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.design}</td>
                  <td>{order.details}</td>
                  <td>
                    <button className="pending">Pending</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminServiceList;
