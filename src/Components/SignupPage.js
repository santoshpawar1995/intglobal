import React from 'react'
import './SignupPage.css'
import { Link } from 'react-router-dom'
function SignupPage() {
  return (
   
   
     <section className="account-section pt-100 pb-100">
        <div className="container">
            <div className="account-wrapper bg--body">
                <div className="section-title mb-3">
                    <h6 className="subtitle text--base">Sign Up</h6>
                    <h3 className="title">Create Account Now</h3>
                </div>
                <form className="account-form row gy-3 gx-4 align-items-center" >
                    <div className="alert alert-success alert-dismissible fade show" style={{display:'none'}} >
  <p className="m-0 text-success"></p>
</div>


<div className="alert alert-danger alert-dismissible fade show " style={{display:'none'}} >
<p className="m-0 text-danger"></p>
</div>                    <input type="hidden" name="_token"/>                   
                        <div className="col-sm-6">
                        <label for="name" className="form-label">Your Name</label>
                        <input type="text"  name="name" className="form-control form--control"/>
                    </div>
                    <div className="col-sm-6">
                        <label for="email" className="form-label">Your Email</label>
                        <input type="text"  name="email" className="form-control form--control"/>
                    </div>
                    <div className="col-sm-6">
                        <label for="phone" className="form-label">Your Phone</label>
                        <input type="text"  name="phone" className="form-control form--control"/>
                    </div>

                    <div class="col-sm-6">
                        <label for="password" className="form-label">Your Password</label>
                        <input type="password" name="password" className="form-control form--control"/>
                    </div>
                    <div className="col-sm-6">
                        <label for="confirm-password" className="form-label">Confirm Password</label>
                        <input  id="confirm-password" name="password_confirmation"
                            className="form-control form--control"/>
                    </div>
                    <div className="col-sm-12 d-flex flex-wrap justify-content-between align-items-center mt-2">
                        <button type="submit" className="cmn--btn bg--base me-3">
                            Register Now </button>
                        <div className="text-end">
                      <a href="" className="text--base">Already have
                                an account ?</a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="form-check  mb-0">
                            <input type="checkbox" className="form-check-input " />
                            <label className="form-check-label" for="accept">I accept all the <a href=""
                                    className="text--base">privacy & policy</a></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

   

  )
}




export default SignupPage
