import React from 'react'
import logo from'../../assets/img/logo.png.png'
// import imgg from '../assets/img/loginjpg.jpg'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import './Forgot_Passward.css'
  import { useState } from 'react';
import { Modal } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
function Forgot_Passward() {
    const [show, setShow] = useState(false);

  return (
    <>
      
     <MDBContainer className="my-5 " style={{height:'73vh'}}>

<MDBCard className='card'  >
  <MDBRow className='g-0 '>

    {/* <MDBCol md='4'>
      <MDBCardImage src={imgg} alt="login form" className='rounded-start w-100' style={{height:'95%',borderBottomLeftRadius:'3rem'}}/>
    </MDBCol> */}

    <MDBCol md='12' style={{boxShadow:'rgb'}}>
      <MDBCardBody className='d-flex flex-column' >

        <div className='d-flex flex-row '>
          {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span> */}
          <MDBCardImage src={logo} alt="login form" className='rounded-start w-50'/>
        </div>

        <h5 className="fw-normal my-4 pb-1" style={{letterSpacing: '1px'}}>Forgot_Passward</h5>

          <MDBInput wrapperClass='mb-3' label='Email or phone Number' id='formControlLg'  size="lg"/>
          <MDBInput wrapperClass='mb-3' label='Password' id='formControlLg' type='password' size="lg"/>
          {/* <MDBInput wrapperClass='mb-3' label='Comfirm-Password' id='formControlLg' type='password' size="lg"/> */}

        <MDBBtn onClick={()=>{setShow(true)}}  className="mb-3 px-5" color='dark' size='md'>SEND OTP</MDBBtn>
        {/* <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-2 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a onClick={()=>{setShow(true)}}  href="#!" style={{color: '#393f81'}}>Register here</a></p> */}

        {/* <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div> */}

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>

    </>
  )
}

export default Forgot_Passward
