import React from 'react';
import AddServiceForm from './AddServiceForm';

const AddServicePage = () => {
    return (
      <div className="service-container">
        <div className="d-flex bg-white justify-content-between">
          <h3>Add Service</h3>
          <h3>Yeasin Arafat</h3>
        </div>
        <div className="service-card-container">
          <div className="row">
            <div className="col-md-12">
              <div className="add-service-form">
                <AddServiceForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddServicePage;