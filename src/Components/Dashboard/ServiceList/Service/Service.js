import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import AdminServiceList from './AdminServiceList/AdminServiceList'; 
import {UserContext} from '../../../../App'

const Service = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admins, setAdmins] = useState(false)
  useEffect(() => {
    fetch("http://localhost:5000/madeAdmin/isAdmin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  },[])
    return (
      <div className="service-container">
        <div className="d-flex bg-white justify-content-between">
          <h3>Service</h3>
          <h3>Yeasin Arafat</h3>
        </div>
        <div className="service-card-container">
          <div className="row">
            
            {admins ? <AdminServiceList/> : (<><ServiceCard /><ServiceCard /></>)}
            
            
          </div>
        </div>
      </div>
    );
};

export default Service;