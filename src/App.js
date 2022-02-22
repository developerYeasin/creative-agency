import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import NoPage from "./Components/NoPage/NoPage";
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Order from './Components/Dashboard/Order/Order';
import Review from './Components/Dashboard/Review/Review';
import Login from './Components/Login/Login';
import AddService from './Components/Dashboard/AddService/AddService';
import MadeAdmin from './Components/Dashboard/MadeAdmin/MadeAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />

          <Route
            path="services"
            element={
              <PrivateRoute>
                <ServiceList />
              </PrivateRoute>
            }
          />
          <Route
            path="order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="review"
            element={
              <PrivateRoute>
                <Review />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="addService"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />
          <Route
            path="madeAddmin"
            element={
              <PrivateRoute>
                <MadeAdmin />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
