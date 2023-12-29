import React, { useState } from 'react'
import './Home.css'
import About from '../Nav-aboutPage/About'
import { Carousel } from 'react-bootstrap'
function Home() {
    const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    return (
        <>
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
                                    <h5 className="subtitle text--base">Who We are</h5>
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
            <section className="service-section pt-100 pb-100">
                <div className="container">
                    <div className='section-title text-center'>
                        <h6 className='subtitle text--base'>Smart Banking</h6>
                        <h2 className='title'>The Better Way to Save & Invest</h2>
                        <p>
                            The client perspective depends on Business first growth.</p>

                    </div>
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

            {/* how it works */}
            <section className="how-it-works overflow-hidden bg--section pt-100 pb-50">
                <div className="container">
                    <div className="section-title text-center">
                        <h6 className="subtitle text--base" >Strategy</h6>
                        <h2 className="title">How it Works</h2>
                        The strategy where user can use the banking system. The strategy is simple easier to use. This is the fewer step to follow to create a bank account.                </div>
                    <div className="row flex-wrap-reverse">
                        <div className="col-lg-6">
                            <div className="how-it-wrapper">
                                <div className="how-it-header bg--title">
                                    <h3 className="title text--white m-0">Create Account</h3>
                                    <p>Veniam laudantium cumque quasi, fuga magni esse.</p>
                                </div>
                                <div className="how-it-body">
                                    <ul className="how-it-area">
                                        <li className="active">
                                            <h6 className="subtitle">1. Register in Minutes</h6>
                                            <div className="text" style={{ display: 'none' }}>
                                                You can register this system within a few minutes. Go to Register page for registration.
                                            </div>
                                        </li>
                                        <li className="">
                                            <h6 className="subtitle">2. Tell Us About Your Business</h6>
                                            <div className="text">
                                                It is a secure way to authenticate whether the customer who is making an online purchase is the rightful owner of the debit card being used.
                                            </div>
                                        </li>
                                        <li className="">
                                            <h6 className="subtitle">3. Set Up A Transfer</h6>
                                            <div className="text">
                                                It is a secure way to authenticate whether the customer who is making an online purchase is the rightful owner of the debit card being used.
                                            </div>
                                        </li>
                                        <li className="open">
                                            <h6 className="subtitle">4. Pay For Your Transfer</h6>
                                            <div className="text" style={{ display: 'block' }}>
                                                It is a secure way to authenticate whether the customer who is making an online purchase is the rightful owner of the debit card being used.
                                            </div>
                                        </li>
                                        <li className="">
                                            <h6 className="subtitle">5. All Done</h6>
                                            <div className="text">
                                                It is a secure way to authenticate whether the customer who is making an online purchase is the rightful owner of the debit card being used.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="how-it-img text-lg-end">
                                <img src="https://hinter.in/assets/images/cjER6eH01645442056.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* app */}
            {/* <section className="apps-section pt-100 pb-50">
                <div className="container">
                    <div className="row align-items-center justify-content-between flex-wrap-reverse gy-5">
                        <div className="col-lg-4 col-sm-5">
                        <div className="app-img">
                            <img style={{borderRadius:'1rem'}} src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="app"/>
                        </div>
                    </div>
                        <div className="col-md-6">
                            <div className="section-title">
                                <h6 className="subtitle text--base">Apps</h6>
                                <h2 className="title">Your banking experience anytime, anywhere</h2>

                                Deserunt hic consequatur ex placeat! atque repellendus inventore quisquam, perferendis, eum reiciendis quia nesciunt fuga. Natus illum doloremque sed perferendis blanditiis maiores, voluptas ad quas beatae facilis totam officiis ratione, ab cumque libero. Ducimus molestias iusto facilis!

                                Natus illum doloremque sed perferendis blanditiis maiores, voluptas ad quas beatae facilis totam officiis ratione, ab cumque libero. Ducimus molestias iusto facilis!
                            </div>
                            <div className="app__btns">
                                <a href="https://www.google.com/">
                                    <img src="https://hinter.in/assets/images/9HX3cjLu1645425298.png" alt="about" />
                                </a>
                                <a href="">
                                    <img src="https://hinter.in/assets/images/zbT8VZef1645425298.png" alt="about" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* clients */}
            <section className="clients-section pt-50 pb-50">
                <div className="container">
                   
                     
                       
<div className='container-fluid '>
<div className="row">
                       
                       <div className="section-title">
                           <h6 className="subtitle text--base">Testimonials</h6>
                           <h2 className="title">What customers say about us</h2>
                           <p>
                               The client perspective depends on Business first growth. How big business can be. We provide best service all area.                            </p>
                         
                       </div>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{backgroundColor:'#F5F5F5',borderRadius:'1rem'}}>
     
      <div className='container d-flex mt-4' style={{height:'70vh', justifyContent:'space-between'}}>
          <div className="col-md-6">
        <h3>Healey Roy</h3>
          <p>This is just awesome, best quality service ever I had
            you can trust them and deposit your Funds. their loan plan are really helpful.
            to use onlinebanking system
          </p>
          </div>
          <div style={{justifyContent:''}}>
          <img style={{height:'65vh',width:'80%',borderRadius:'1rem'}}  src='https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2019/04/getty_simple-review_092720.jpg' className='caro-img-cont'/>
          </div>
          </div>
         
          <Carousel.Caption >
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:'#F5F5F5',borderRadius:'1rem'}}>
     
      <div className='container d-flex mt-4' style={{height:'70vh', justifyContent:'space-between'}}>
          <div className="col-md-6">
        <h3>Healey Roy</h3>
          <p>This is just awesome, best quality service ever I had
            you can trust them and deposit your Funds. their loan plan are really helpful.
            to use onlinebanking system
          </p>
          </div>
          <div style={{justifyContent:''}}>
          <img style={{height:'65vh',width:'80%',borderRadius:'1rem'}}  src='https://www.axosbank.com/-/media/Axos/Facts/Connected-On-the-Move-DDE-flip.jpg' className='caro-img-cont'/>
          </div>
          </div>
         
          <Carousel.Caption >
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundColor:'#F5F5F5',borderRadius:'1rem'}}>
     
      <div className='container d-flex mt-4' style={{height:'70vh', justifyContent:'space-between'}}>
          <div className="col-md-6">
        <h3>Healey Roy</h3>
          <p>This is just awesome, best quality service ever I had
            you can trust them and deposit your Funds. their loan plan are really helpful.
            to use onlinebanking system
          </p>
          </div>
          <div style={{justifyContent:''}}>
          <img style={{height:'65vh',width:'80%',borderRadius:'1rem'}}  src='https://image.cnbcfm.com/api/v1/image/106831704-1611850241584-gettyimages-1221545860-istock20200211_007169.jpeg?v=1611850398&w=929&h=523&vtcrop=y' className='caro-img-cont'/>
          </div>
          </div>
         
          <Carousel.Caption >
       
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      </div>
                {/* </div> */}
            </div>
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
    <section className="blogs-section pt-100 pb-50">
        <div className="container">
            {/* <div className="section-title text-center">
                <h6 className="subtitle text--base">News & Tips</h6>
                <h2 className="title">Latest News &amp; Tips</h2>
                <p>
                    Banking commodi explicabo aperiam unde maxime debitis. </p>
            </div> */}
            <div className="row justify-content-center gy-4">
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="blog__item">
                        <div className="blog__item-img">
                            <a href="">
                                        <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog"/>
                                    </a>
                        </div>
                        <div className="blog__item-content">
                            <div className="d-flex flex-wrap justify-content-between meta-post">
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <h5 className="blog__item-content-title">
                                <a href="">
                                            What are “cloud skills” for banks, anyway?
                                        </a>
                            </h5>
                            <a href="" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="blog__item">
                        <div className="blog__item-img">
                            <a href="">
                                        <img src="https://media.istockphoto.com/id/1473164518/photo/woman-with-back-pain-working-at-standing-desk-home-office.webp?b=1&s=170667a&w=0&k=20&c=XZNssSyEmkDSBK5w3f4lLUXcpTS24cyN890c5ZIUTiI=" alt="blog"/>
                                    </a>
                        </div>
                        <div className="blog__item-content">
                            <div className="d-flex flex-wrap justify-content-between meta-post">
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <h5 className="blog__item-content-title">
                                <a href="">
                                            Finance now! Opportunities for embedded lending an...
                                        </a>
                            </h5>
                            <a href="" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                    <div className="blog__item">
                        <div className="blog__item-img">
                            <a href="">
                                        <img src="https://media.istockphoto.com/id/1455701949/photo/business-people-meeting-to-discuss-and-brainstorming-the-financial-report-paperwork-in-home.webp?b=1&s=170667a&w=0&k=20&c=_KEPyd-hV36kXHQzzAXcsS1nxTFSB4qiI_sAJScDtzQ=" alt="blog"/>
                                    </a>
                        </div>
                        <div className="blog__item-content">
                            <div className="d-flex flex-wrap justify-content-between meta-post">
                                <span><i className="far fa-user"></i> Admin</span>
                            </div>
                            <h5 className="blog__item-content-title">
                                <a href="">
                                            Four steps for a cloud-ready talent system in bank...
                                        </a>
                            </h5>
                            <a href="" className="read-more">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Home
