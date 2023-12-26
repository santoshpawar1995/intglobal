import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function SmeFooter() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our Interglobal bank</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
{/* 
        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section> */}

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Useful Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Interglobal Bank
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Rates Online
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Current Account Service
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Fees & Charges for Loans
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    RBI Circular:Costomer
                    Education Regarding
                    Asset Classification
                  </a>
                  </li>
                  {/* <li>
                  <a href='#!' className='text-white'>
                    Fees & Charges for Loans
                  </a>
                  </li>
                  <li>
                  <a href='#!' className='text-white'>
                    Fees & Charges for Loans
                  </a>
                  </li>
                  <li>
                  <a href='#!' className='text-white'>
                    Fees & Charges for Loans
                  </a>
                  </li> */}
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Others</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Open Interglobal Bank bussiness Account
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Login to IDEAL
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Security and you
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Important
                    Announcements
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Regulatory Discosure
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Digital Safety Tips
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Tutorials
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Interglobal Bank BussinessCare
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    1800 4199500 / 1800103 6500(within India)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    +9144 6632 80000 (if Overseas)
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    10am to 7pm
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Market</h5>

              <ul className='list-unstyled mb-0'>
              <li>
                  <a href='#!' className='text-white'>
                    India
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Singapore
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Hong Kong
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Indonesia
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Mainland
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Taiwan
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Interglobal Bank India Limited:
        <a className='text-white' href=''>
          Interglobal Bank.com
        </a>
      </div>
    </MDBFooter>
  );
}