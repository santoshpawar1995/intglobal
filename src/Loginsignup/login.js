import React from 'react'
import logo from'../assets/img/logo.png.png'
import imgg from '../assets/img/loginjpg.jpg'
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
  import './login.css'

function Login() {
  return (
   
   
    
  
     <MDBContainer className="my-5 " style={{height:'70vh'}}>

<MDBCard className='card' style={{height:'70vh'}}>
  <MDBRow className='g-0 '>

    <MDBCol md='6 '>
      <MDBCardImage src={imgg} alt="login form" className='rounded-start w-100' style={{height:'95%',borderBottomLeftRadius:'3rem'}}/>
    </MDBCol>

    <MDBCol md='6' style={{boxShadow:'rgb'}}>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row '>
          {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          <span className="h1 fw-bold mb-0">Logo</span> */}
          <MDBCardImage src={logo} alt="login form" className='rounded-start w-50'/>
        </div>

        <h5 className="fw-normal my-4 pb-1" style={{letterSpacing: '1px'}}>Sign into your account</h5>

          <MDBInput wrapperClass='mb-3' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-3' label='Password' id='formControlLg' type='password' size="lg"/>

        <MDBBtn className="mb-3 px-5" color='dark' size='lg'>Login</MDBBtn>
        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-2 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

        {/* <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div> */}

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>

 

  );
}

export default Login;