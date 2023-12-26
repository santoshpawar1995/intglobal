import React from 'react'
import './Contactus.css'
function Contactus() {
  return (
    <>
       <section className="hero-section bg--overlay bg_img1" >
                <div className="container">
                    <div className="hero-content">
                        <h2 className="hero-title">Contact</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href=""> Home </a>
                            </li>
                            <li>
                             Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
      <section className="contact-section pt-100 pb-50">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h6 className="subtitle text--base">Contact US</h6>
                            <h2 className="title">FEEL FREE TO DROP US A MESSAGE</h2>
                            <p>
                                Need to speak to us? Do you have any queries or suggestions? Please contact us about all enquiries including membership and volunteer work using the form below.
                            </p>
                        </div>
                        <div className="contact-area">
                            <div className="contact__item">
                                <div className="contact__item-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact__item-cont">
                                    <h6 className="contact__item-cont-title">Address</h6>
                                    <span className="text--base">
                                        3584 Hickory Heights Drive ,Hanover MD 21076, USA
                                    </span>
                                </div>
                            </div>
                            <div className="contact__item">
                                <div className="contact__item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact__item-cont">
                                    <h6 className="contact__item-cont-title">Call US </h6>
                                    <a href="Tel:+1 (910) 701-5834" className="text--base"> +1 (910) 701-5834</a>
                                </div>
                            </div>
                            <div className="contact__item">
                                <div className="contact__item-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact__item-cont">
                                    <h6 className="contact__item-cont-title">Email US</h6>
                                    <a href="mailto:customersupport@hinter.in" className="text--base">customersupport@hinter.in</a>
                                </div>
                            </div>
                        </div>
                        <div className="mapouter mt-4 mt-lg-5">
                            <div className="gmap_canvas">
                                <iframe width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-wrapper">
                            <div className="section-title mb-3">
                                <h6 className="subtitle text--base"> Contact US</h6>
                                <h3 className="title">Send Message to get connected</h3>
                            </div>
                            <form className="contact-form row g-3 gx-xxl-4 form-contact" method="post" action="https://hinter.in/contact" id="contactform">
                                <input type="hidden" name="_token" value="kZ4ellxF7PM3xY1uFyMarqrPGQk1xxXNoIkdNcQX"/>                                <div className="col-sm-6">
                                    <label for="name" className="form-label">Your Name</label>
                                    <input type="text" id="name" name="name" className="form-control form--control"/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="email" className="form-label">Your Email</label>
                                    <input type="text" id="email" name="email" className="form-control form--control"/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="phone" className="form-label">Your Phone</label>
                                    <input type="text" id="phone" name="phone" className="form-control form--control"/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="subject" className="form-label">Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control form--control"/>
                                </div>
                                <div className="col-sm-12">
                                    <label for="message" className="form-label">Your Message</label>
                                    <textarea id="message" name="message" className="form-control form--control"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button type="submit" className="cmn--btn bg--base">
                                        Send Message                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Contactus;
