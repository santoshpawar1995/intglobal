import React from 'react'
import './SignupPage.css'
import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <div>
         <section className="account-section pt-100 pb-100">
      <div className="container">
        <div className="account-wrapper bg--body">
            <div className="section-title mb-3">
                <h6 className="subtitle text--base">Sign In</h6>
                <h3 className="title">Login Now</h3>
            </div>
            <form className="account-form row gy-3 gx-4 align-items-center" >
                <div className="alert alert-success alert-dismissible fade show " style={{display:'none'}} >
<p className="m-0 text-success"></p>
</div>


<div className="alert alert-danger alert-dismissible fade show" style={{display:'none'}} role="alert">
<p className="m-0 text-danger"></p>
</div>                    

                 <input type="hidden" name="_token" />                    
                   <div className="col-sm-12">
                    <label for="email" className="form-label" >Your Email</label>
                    <input type="text" id="email" name="email" className="form-control form--control"/>
                </div>
                <div className="col-sm-12">
                    <label for="password" className="form-label">Your Password</label>
                    <input type="password" id="password" name="password" className="form-control form--control"/>
                </div>
                <div className="col-sm-12 mt-2">
                  <button type="submit" className="cmn--btn bg--base me-3">
                        Login Now                        </button>
                    <div className="d-flex flex-wrap justify-content-between align-items-center mt-2">
                        <a href="forgot.html" className="text--base mt-1">Forget Password</a>
                       <a href="register.html" className="text--base mt-1">Don't have
                            an account ?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
    </div>
  )
       
  
}

export default LoginPage;
