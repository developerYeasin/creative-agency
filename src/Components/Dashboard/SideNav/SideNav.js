import React, { useContext, useEffect, useState } from "react";
import logo from "../../../images/logos/logo.png";
import "./SideNav.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaServicestack } from "react-icons/fa";
import {
  MdOutlineRateReview,
  MdOutlineAdd,
  MdPersonAddAlt,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const SideNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admins, setAdmins] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/madeAdmin/isAdmin", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  return (
    <div className="side-navbar">
      <div className="side-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="side-menu">
        <li>
          <Link to="/services">
            <span>
              <FaServicestack />
            </span>
            Services List
          </Link>
        </li>
        {admins ? (
          <>
            <li>
              <Link to="/addService">
                <span>
                  <MdOutlineAdd />
                </span>
                Add Service
              </Link>
            </li>
            <li>
              <Link to="/madeAddmin">
                <span>
                  <MdPersonAddAlt />
                </span>
                Made Admin
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/review">
                <span>
                  <MdOutlineRateReview />
                </span>
                Review
              </Link>
            </li>
            <li>
              <Link to="/order">
                <span>
                  <FiShoppingCart />
                </span>
                Order
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideNav;
