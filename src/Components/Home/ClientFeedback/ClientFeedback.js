import React from "react";
import './ClientFeedback.css'
import ClientSlider from "./ClientSlider/ClientSlider";

const ClientFeedback = () => {
  return (
    <div className="ClientFeedback">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="main-title">
              Clients <span>Feedback</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <ClientSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
