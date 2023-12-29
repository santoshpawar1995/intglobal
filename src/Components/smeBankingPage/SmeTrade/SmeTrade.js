import React from 'react'
import './SmeTrade.css'
import Miniheader from '../Miniheader'
import SmeCouresel from '../SmeCouresel'
import SmeFooter from '../smefooter/SmeFooter'
function SmeTrade() {
  return (
    <>
    <Miniheader/>
    {/* <SmeCouresel/> */}
    <div className='container-fluid'>
      <div className=' container account_body'>
        <h1>Import Services</h1>
        <p className=''>Access import financing products easily</p>
        <div className='col-md-12 product-list'>
         <ul className='row'>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Import Bills Under Collection (DA/DP)</a>
                  </h3>
                  <p>
                    <a href=''>Facilitate trade activities with our documentary collection service</a>
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
                    <a href=''>Buyers' Credit</a>
                  </h3>
                  <p>
                    <a href=''>Extend your payment cycle for imports</a>
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
                    <a href=''>Letter of Credit Issuance</a>
                  </h3>
                  <p>
                    <a href=''>Provide assurance to your suppliers when the complying documents are presented</a>
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
                    <a href=''>Shipping Guarantee/Air Waybill Endorsementt</a>
                  </h3>
                  <p>
                    <a href=''>Provide assurance to your suppliers when the complying documents are presented</a>
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

export default SmeTrade
