import React from 'react';
import './Contact.css'
import ContactForm from './ContactForm';

const Contact = () => {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-details">
                <h2 className="contact-title">
                  Let us handle your project, professionally.
                </h2>
                <p className="contact-desc">
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>copyright Orange labs 2020</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;