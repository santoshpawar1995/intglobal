import logo from './logo.svg';

import './App.css';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import Header from './Components/Header';
import MiddlePage from './Components/MiddlePage';
import Footer from './Components/Footer';

// import { BrowserRouter as Routes, Route, Router } from "react-router-dom";

// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
import DashboardHome from './Components/Dashboard/DashboardHome';
import Login from './Loginsignup/login';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import Registration from './Loginsignup/Registration';
import Services from './Components/NavServices/Services';
import About from './Components/Nav-aboutPage/About';
import Blog from './Components/nav-blogPage/Blog';
import Contactus from './Components/Nav-ContactusPage/Contactus';
import SmeBank from './Components/smeBankingPage/SmeBank';


function App() {
  return (
    <>

      {/* <Header/>      */}
      {/* <MiddlePage/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> 
      <Footer/> */}
      {/* <Login/> */}
      {/* <Registration/> */}
    
{/* <Services/> */}
{/* <About/> */}
{/* <Blog/> */}
{/* <Contactus/> */}
<SmeBank/>
    </>








  );
}

export default App;
