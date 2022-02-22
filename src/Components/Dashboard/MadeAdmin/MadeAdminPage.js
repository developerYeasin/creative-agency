import React from 'react';
import MadeAdminForm from './MadeAdminForm';

const MadeAdminPage = () => {
    return (
      <div className="service-container">
        <div className="d-flex bg-white justify-content-between">
          <h3>Made Admin</h3>
          <h3>Yeasin Arafat</h3>
        </div>
        <div className="service-card-container">
          <div className="row">
              <div className="col-md-12">
                  <div className="made-admin-form">
                      <MadeAdminForm/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
};

export default MadeAdminPage;