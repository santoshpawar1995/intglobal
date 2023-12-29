import React from 'react'
import './SmeTreasury.css'
import Miniheader from '../Miniheader'
import SmeCouresel from '../SmeCouresel'
import SmeFooter from '../smefooter/SmeFooter'
function SmeTreasury() {
  return (
    <>
      <Miniheader/>
      <SmeCouresel/>
      <div className='container-fluid'>
      <div className=' container account_body'>
        <h1>Foreign Exchange</h1>
        <p className=''>Hedge your FX risks with our dedicated treasury specialists</p>
        <div className='col-md-12 product-list'>
         <ul className='row'>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://www.shutterstock.com/image-photo/smiling-mature-couple-meeting-bank-600nw-2259811269.jpg'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Interglobalbank FX Online</a>
                  </h3>
                  <p>
                    <a href=''>Fast and direct FX transactions</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5gQxxSzBcDj15eXKBjR9iC_mYeM-uhcSkQ&usqp=CAU'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>Foreign Exchange</a>
                  </h3>
                  <p>
                    <a href=''>Convert currencies for delivery</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLTEtlqPguoT0ROLtswi28w3xASt_mchgNwys-Tvu6mVpt4YslBx4S_Vrq7ny0b2YsyTI&usqp=CAU'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>FX Options</a>
                  </h3>
                  <p>
                    <a href=''>Customised to help manage your foreign exchange risks</a>
                  </p>
                </div>
            </div>
          </li>
          <li className='product-list-layout-box col-md-6 col-sm-12 col-xs-12'>
            <div className='loyout-container'>
                <a href=''>
                  <img className='loyout-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgPPDv2WkM6fHKuujVBlDWaitdgc3V5yTRHopFdJSb0jjlY53Q2Dtz8qv5WrfI8SB_c0&usqp=CAU'/>
                </a>
                <div className='content'>
                  <h3>
                    <a href=''>FX-Retail</a>
                  </h3>
                  <p>
                    <a href=''>CCIL Platform</a>
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

export default SmeTreasury
