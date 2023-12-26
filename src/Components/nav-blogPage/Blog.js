import React from 'react'
// import './Blog.css'
function Blog() {
  return (
    <>
    <section className="hero-section bg--overlay bg_img1" >
    <div className="container">
        <div className="hero-content">
            <h2 className="hero-title">Blog</h2>
            <ul className="breadcrumb">
                <li>
                    <a href=""> Home </a>
                </li>
                <li>
                Blog Posts</li>
            </ul>
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

export default Blog
