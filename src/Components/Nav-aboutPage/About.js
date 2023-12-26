import React from 'react'
// import './About.css'
function About() {
    return (
        <>
            <section className="hero-section bg--overlay bg_img1">
                <div className="container">
                    <div className="hero-content">
                        <h2 className="hero-title">About US</h2>
                        <ul className="breadcrumb">
                            <li>
                                <a href=""> Home </a>

                            </li>
                            <li>
                                About US </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about-section pt-50 pb-50">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="about-thumb h-100">
                                <div className="thumb">
                                    <img src="https://c8.alamy.com/comp/E7DA81/money-makes-the-world-go-around-a-spinning-globe-of-international-E7DA81.jpg" alt="about" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="subtitle text--base">Who We are</h6>
                                    <h2 className="title">WE ARE Hinter Global Bank</h2>
                                    <p>
                                        A place for everyone who wants to simply banking system. Deposit funds using payment gateway or bank transfer. A Bank at fair price is guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with our services. A place for
                                        everyone who wants to simply loans and Dps. Even with a history of hefty technological investments and an even larger donations, consumer and investor confidence has never waned. </p>
                                </div>
                                <ul className="about-list">
                                    <li>
                                        <span>
                                            Get up to $15,000 Cash Fast
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            15 Minute Online Application
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Coverage around the world
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Business without borders
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Affiliates and partnerships
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Bad Credit Considered2
                                        </span>
                                    </li>

                                </ul>
                                <div className="btn__grp mt-4 pt-3">
                                    <a href="" className="cmn--btn btn-outline">Get Started</a>
                                    <a href="" className="cmn--btn">More About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section-2 pt-50 pb-100">
                <div className="container">
                    <div className="about__item">
                        <h3>We are Secure and Stable</h3>
                        Hinter Global Bank has become one of the largest donors and the largest bank donor All over the World.
                    </div>
                </div>
            </section>
        </>
    )

}

export default About
