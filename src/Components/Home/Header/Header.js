import React from "react";
import "./Header.css";
import background from "../../../images/header-background.svg";
import { Link } from "react-router-dom";
import img from "../../../images/logos/Frame.png";

const Header = () => {
  return (
    <div
      className="header-background"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="header-content">
              <h1 className="header-title">
                Let’s Grow Your Brand To The Next Level
              </h1>
              <p className="header-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum duis laoreet maecenas. Feugiat
              </p>
              <Link to="/order" className="primary-btn">
                Hire Us
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="header-img">
              <img src={img} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
