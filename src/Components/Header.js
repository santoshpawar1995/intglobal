import React from 'react'
import './Header.css'
import logo from '../assets/img/logo.png.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Login from '../Loginsignup/login';
function Header() {
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <header class="position-relative">
                {/* <div class="navbar-top bg--title">
                    <div class="container">
                        <div class="d-flex flex-wrap justify-content-evenly justify-content-md-between">
                            <div class="d-flex flex-wrap align-items-center">
                                <ul class="social-icons py-1 py-md-0">
                                    <li>
                                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    </li>

                                    <li>
                                        <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                                <div class="change-language me-md-auto">
                                    <select name="currency" class="currency selectors nice language-bar">
                                        <option value="" selected="">
                                            USD
                                        </option>
                                        <option value="">
                                            EUR
                                        </option>
                                        <option value="">
                                            INR
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <ul class="contact-bar py-1 py-md-0 ">
                                <li>
                                    <a href="Tel:+1 (910) 701-5834">+91 7892293001</a>
                                </li>
                                <li>
                                    <a href="Mailto:customersupport@hinter.in">santoobpawar@gmail.com</a>
                                </li>
                                <li>
                                    <div class="change-language d-none d-sm-block">
                                        <select name="language" class="language selectors nice language-bar">
                                            <option value="" selected="">
                                                EN
                                            </option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                {/* dfghjkl */}
                <div class="navbar-bottom active">
                    <div class="container">
                        <div class="navbar-wrapper">
                            <div class="logo">
                                <a href="">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            <div class="change-language d-sm-none ms-auto me-3 text--title">
                                <select name="language" class="language selectors nice language-bar">
                                    <option value="" selected="">
                                        EN
                                    </option>
                                </select>
                            </div>
                            <div class="nav-toggle d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div class="nav-menu-area">
                                <div class="menu-close text--danger d-lg-none">
                                    <i class="fas fa-times"></i>
                                </div>
                                <ul class="nav-menu">
                                    {/* <li><a href="" target="_self">Home</a></li>
                                    <li><a hre                                                                                                                                              f="" target="_self">Services</a></li>
                                    <li><a href="" target="_self">Blog</a></li>
                                    <li><a href="" target="_self">About</a></li>

                                    <li>
                                        <a href="">Contact</a>
                                    </li> */}

                                    <li>
                                        <div class="btn__grp ms-lg-3">
                                            <Button variant="primary" onClick={() => { setShow(true); }} >

                                                Login Now</Button></div>


                                    </li>
                                </ul>
                            </div>
                        </div>            </div>
                </div>
            </header>

            {/* {show && <Login/>} */}
            <div className='modalcontain'>
            <Modal
                show={show}
                // onHide={handleClose}
                // backdrop="static"
                // keyboard={false}
           >
                <Modal.Body>
                <Login/>
                </Modal.Body>
            </Modal>
            </div> 

        </>

    )
}

export default Header
