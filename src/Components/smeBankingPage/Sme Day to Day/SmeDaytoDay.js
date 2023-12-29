import React from 'react'
import './SmeDaytoDay.css'
import Miniheader from '../Miniheader'

import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import SmeFooter from '../smefooter/SmeFooter';
function SmeDaytoDay() {
  const [index, setIndex] = useState(0);
    
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <>
    <Miniheader/>
    <div className='container-fluid '>
     <Carousel activeIndex={index} onSelect={handleSelect}>
     <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{height:'50vh'}}  src='https://cdn.cbeditz.com/cbeditz/large/flex-modern-design-hd-banner-background-download-lgzhw.jpg' className='caro-img-cont'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{height:'50vh'}}  src='https://static4.depositphotos.com/1003326/319/i/450/depositphotos_3191160-stock-photo-blurry-bright-background.jpg' className='caro-img-cont'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img style={{height:'50vh'}}  src='https://thumbs.dreamstime.com/b/world-map-technological-background-best-internet-concept-global-business-elements-image-furnished-bright-lines-66529240.jpg' className='caro-img-cont'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='container'>
      <div className='account_body'>
        <h1>Accounts</h1>
        <p className=''>Manage your cash flow with our easy-to-open accounts.</p>
        <div className='col-md-12 product-list'>
         <ul className='row'>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Business Accounts</a>
                  </h3>
                  <p>
                    <a href=''>Conduct your daily business banking activities easily and conveniently</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Structured Escrow Account Solutions</a>
                  </h3>
                  <p>
                    <a href=''>Safeguard your funds and mitigate counterparty risk</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Fixed Deposit Account</a>
                  </h3>
                  <p>
                    <a href=''>Maximise your returns with Asia’s safest bank</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Exchange Earner's Foreign Currency Account</a>
                  </h3>
                  <p>
                    <a href=''>Reduce the cost of international trade and hedge against forex fluctuations</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Corporate Multi-Currency Account</a>
                  </h3>
                  <p>
                    <a href=''>1 account, 10 currencies</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Liquidity Management</a>
                  </h3>
                  <p>
                    <a href=''>Achieve an efficient account structure, minimize idle cash and manage risk while optimizing returns</a>
                  </p>
                </div>
            </div>
          </li>
         </ul>
        </div>
      </div>
    </div>
<SmeFooter/>
    </>
  )
}

export default SmeDaytoDay
