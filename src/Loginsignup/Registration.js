import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import './Registration.css'
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
function Registration() {
  // const [value, setValue] = useState()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState('');

  const handleChange = (value) => {

    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/; // Validates a 10-digit phone number

    return phoneNumberPattern.test(phoneNumber);
  };
  return (
    <MDBContainer fluid className='p-1 background-radial-gradient overflow-hidden' style={{ borderRadius: '0.4rem' }} >

      <MDBRow >



        <MDBCol md='12' className='position-relative ' >

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-4' style={{ backgroundColor: 'white', borderRadius: '2rem' }}>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='First name' id='form1' type='text' />
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-2' label='Last name' id='form2' type='text' />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-2' label='Email' id='form3' type='email' />

              <div className='number'>
                {/* <PhoneInput
                placeholder="Enter phone number"
                country={'india'}
                value={value}
                onChange={setValue} 
                inputProps={{
                  required:true,
                }}
                wrapperClass='mb-2' className='phone_inputs'/>
                <span className='number'>{value}</span> */}
                <label>
                  <PhoneInput

                    placeholder="Enter phone number"
                    country={'in'}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      required: true,

                    }}
                  />
                  Phone number
                </label>
                 {/* {!valid && (
                  <p className='error_Message'>Please enter a valid phone number!</p>
                )} */}
              </div>
              {/* <MDBInput wrapperClass='mb-2' label='Mobile Number' id='form4' type='password' /> */}
              <MDBInput wrapperClass='mb-2' label='Password' id='form5' type='password' />
              <MDBInput wrapperClass='mb-2' label='Comfirm Password' id='form6' type='password' />

              {/* <div className='d-flex justify-content-center mb-2'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='w-100 mb-2 bg-dark' size='md' style={{ borderRadius: '0.7rem' }}>sign up</MDBBtn>

              {/* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

             

              </div> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Registration;