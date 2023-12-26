import React from 'react'
import './Services.css'
function Services() {
    return (
        <>
            <section className="hero-section bg--overlay bg_img1" >
                <div className="container">
                    <div className="hero-content">
                        <h2 className="hero-title">Service</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href=""> Home </a>
                            </li>
                            <li>
                             Service</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="service-section pt-100 pb-100">
                <div className="container">
                    <div className="row g-4 g-xxl-4 g-xl-3 justify-content-center">

                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        STRONG SECURITY
                                    </h5>
                                    <p>
                                        Protection against DDoS attacks,
                                        full data encryption
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        WORLD COVERAGE
                                    </h5>
                                    <p>
                                        Providing services in 99% countries
                                        around all the global</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        PAYMENT OPTIONS
                                    </h5>
                                    <p>
                                        Popular methods: Visa, MasterCard,
                                        bank transfer, cryptocurrency									
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        MOBILE APP
                                    </h5>
                                    <p>
                                        Trading via our Mobile App, Available
                                        in Play Store & App Store
                                    </p>
                                </div>
                            </div>
                        </div >
                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        COST EFFICIENCY
                                    </h5>
                                    <p>
                                        Reasonable trading fees for takers
                                        and all market makers</p>
                                </div>
                            </div>
                        </div >
                        <div className="col-md-6 col-xl-4">
                            <div className="service-item">
                                <div className="service-item__icon">
                                    <i className="fas fa-piggy-bank"></i>
                                </div>
                                <div className="service-item__cont">
                                    <h5 className="service-item__cont-title">
                                        HIGH LIQUIDITY
                                    </h5>
                                    <p>
                                        Fast access to high liquidity orderbook
                                        for top currency pairs
                                    </p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >

            <section className="ctas-section bg--overlay bg_img bg_fixed" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="cta-img">
                                <img src='https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=800' alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ctas-content">
                                <div className="section-title text-white">
                                    <h6 className="subtitle text--base">Quick Start</h6>
                                    <h3 className="title">Need a Personalized Solution?</h3>
                                    <p>
                                        Explicabo repellat minus eaque velit unde nulla nobis veritatis labore dolore, necessitatibus harum laborum at, aut reprehenderit!
                                    </p>
                                </div>
                                <div>
                                    <a href="index.html" className="cmn--btn">Get Started Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="faqs-section pt-100 pb-100">
                <div className="container">
                    <div ClassName="row justify-content-center gy-3">
                        <div ClassName="col-lg-6">
                            <div ClassName="accordion-wrapper">
                                <div ClassName="accordion-item active">
                                    <div ClassName="accordion-title">
                                        <h6 ClassName="title">
                                            Why is there a need for an One-Time-Password (OTP) to complete an online purchase?
                                        </h6>
                                        <span ClassName="icon"></span>
                                    </div>
                                    <div ClassName="accordion-content" style={{display:'none'}}>
                                        An OTP helps to protect against online fraud. It is a secure way to authenticate whether the customer who is making an online purchase is the rightful owner of the debit card being used.									</div>
                                </div>
                                <div ClassName="accordion-item">
                                    <div ClassName="accordion-title">
                                        <h6 ClassName="title">
                                            Can I choose not to use the OTP service for online purchases?
                                        </h6>
                                        <span ClassName="icon"></span>
                                    </div>
                                    <div ClassName="accordion-content" style={{display:'none'}}>
                                        No. Bangladesh Bank regulation has mandated the use of OTP for every online purchase.									</div>
                                </div>
                                <div ClassName="accordion-item">
                                    <div ClassName="accordion-title">
                                        <h6 ClassName="title">
                                            Will I be charged a fee for receiving the OTP via SMS?
                                        </h6>
                                        <span ClassName="icon"></span>
                                    </div>
                                    <div ClassName="accordion-content" style={{display:'none'}}>
                                        No. The OTP service is free of charge. The Bank shall notify customers if any charge is imposed in future for this service. You can find the latest tariff guide for services on the Genius Bank Bangladesh website.									</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-wrapper"> 
                                <div className="accordion-item active">
                                    <div ClassName="accordion-title">
                                        <h6 ClassName="title">
                                            Man particular insensible celebrated
                                        </h6>
                                        <span className="icon"></span>
                                    </div>
                                    <div className="accordion-content" >
                                        Aut, expedita optio? Quis ab laudantium, facilis similique est alias, possimus expedita dolorum fugit mollitia, optio quo?

                                        Facilis similique est alias, possimus expedita dolorum fugit mollitia, optio quo? Dignissimos beatae officia repellat maiores!									</div>
                                </div>
                                <div ClassName="accordion-item ">
                                    <div ClassName="accordion-title">
                                        <h6 ClassName="title">
                                            Right my front it wound cause fully
                                        </h6>
                                        <span ClassName="icon"></span>
                                    </div>
                                    <div ClassName="accordion-content">
                                        Aut, expedita optio? Quis ab laudantium, facilis similique est alias, possimus expedita dolorum fugit mollitia, optio quo?

                                        Facilis similique est alias, possimus expedita dolorum fugit mollitia, optio quo? Dignissimos beatae officia repellat maiores!									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Services;