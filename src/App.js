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
import Home from './Components/HomePage/Home';
import SmeCouresel from './Components/smeBankingPage/SmeCouresel';
import SmeHomePage from './Components/smeBankingPage/SmeHomePage/SmeHomePage';
import SmeDaytoDay from './Components/smeBankingPage/Sme Day to Day/SmeDaytoDay';
import SmeTrade from './Components/smeBankingPage/SmeTrade/SmeTrade';
import SmeTreasury from './Components/smeBankingPage/SmeTreasury/SmeTreasury';
import Forgot_Passward from './Components/ForgotPassword/Forgot_Passward';


function App() {
  return (
    <>

      <Header/>     
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
{/* <SmeBank/> */}
{/* <SmeCouresel/> */}
{/* <Home/> */}
{/* <SmeHomePage/> */}
{/* <SmeDaytoDay/> */}
{/* <SmeTrade/> */}
{/* <SmeTreasury/> */}
{/* <Forgot_Passward/> */}

    </>








  );
}

export default App;
