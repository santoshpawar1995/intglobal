import React, { useState } from 'react'
import './SmeHomePage.css'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import logo from '../../../assets/img/logo.png.png'
import Carousel from 'react-bootstrap/Carousel';
import SmeFooter from '../smefooter/SmeFooter';
const SmeHomePage = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
  return (
    <>
      <Navbar expand="lg" className="container-fluid bg-body-white">
      <Container >
        <Navbar.Brand href="#"><img src={logo} style={{height:'2rem', width:'8rem'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">BussinessClass</Nav.Link>
            <Nav.Link href="#action2">Day to Day</Nav.Link>
            <Nav.Link href="#action2">trade</Nav.Link>
            <Nav.Link href="#action2">Financing</Nav.Link>
            <Nav.Link href="#action2">Treasury</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Research</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    {/* Carousel */}
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

    {/* bottomNavigation */}
    <div className='navbar-overflow navlinks '>
                <div className='navbar-overflow-content'>
                    <div className='navbar-overflow-width'>
                        <table>
                            <tbody className='navbarlink'>
                                <tr>
                                    <td><a href=''><img style={{marginLeft:'3.7rem'}} src='https://www.dbs.com/documents/1055266/18761604/icon-onboarding-dbs-may23.png/6cd22a79-e12f-109d-a75f-5b19001b010f?t=1576041292558'/><div>Open
                                    Business Account</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'2.2rem'}}   src='https://www.dbs.com/documents/1055266/18764039/loansonline-icon.png/4030ede8-6091-9153-7aca-5b5629993292?t=1576041257194'/><div>Apply for a Loan</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'0.2rem'}} src='https://www.dbs.com/documents/1055266/18764039/forms-icon.png/d9775085-863a-d9f7-7274-ea7175207492?t=1576041257080'/><div>Forms</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'2rem'}}  src='https://www.dbs.com/documents/1055266/18761604/icon-digibank.png/0a5a24b3-7645-2bbf-924d-39eea9f0b239?t=1576041290969'/><div>Digital Banking</div></a></td>
                                    <td><a href=''><img style={{marginLeft:'1.5rem'}}  src='https://www.dbs.com/documents/1055266/18764039/contact-us-icon.png/94cc8236-ef13-54e6-a9b0-74666edf8775?t=1576041256957'/><div>Get in Touch</div></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
{/* featured */}
            <div className='container'>
            <div className=' col-md-12 potm group-header'>
                <h2>Featured Article</h2>
                <div className='layout-box col-md-8 col-sm-6 col-xs-12'>
                    <div className='layout-container'>
                        <div className='img-responsive'>
                            <a href=''>
                                <div className='shade'> </div>

                                <img className='img-responsive' src='' />
                                <span className='testimonial-quote'>“</span>


                            </a>


                            <div className='content'>
                                <a className='' href=''>
                                    <h2 style={{ color: '#FFFFFF' }}>Getting The Story Right</h2>
                                    <p style={{ color: '#FFFFFF' }}>With a mission to help others, social enterprises can tell more compelling stories to engage with Millennials</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='layout-box col-md-4 col-sm-6 col-xs-12' style={{ backgroundColor: '#134F5C' }}>
                    <div className='layout-container'></div>
                    <div style={{ height: '280px' }}></div>
                    <div className='content'>
                        <h2 style={{ color: '#FFFFFF' }}>More marketing insights</h2>
                    </div>
                </div>
            </div>
             

             {/* trending */}
            <div className='col-md-12 featured group-header'>
                <h1 className='product-listing-title'>What’s Trending</h1>
                <p className='What’s Trending'>Read up on trends, insights and technology.</p>
                <ul className='feature-layout'>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>Supporting Our SME Community Amid A Crisis</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWWUnWgp0esxPhPnZ_lnNgOLANz3dMX7DVA&usqp=CAU' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>How a bank is supporting a startup in Singapore</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Njc4NDkwM3x8ZW58MHx8fHx8' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>Key Takeaways from INTRGLOBALBANK - KPI Mini Brand Accelerator Event</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://avatars.mds.yandex.net/i?id=7932bcb9adadced226b5a3fad5a32c5b-4479087-images-taas-consumers&n=27&h=480&w=480' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>What All Aspiring Social Entrepreneurs Need To Know</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://static.vecteezy.com/system/header_search_link/thumbnail/34/hsl_large_term-bg-1__1_.jpg' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>INTERGLOBALBANK SME Banking Partners Alibaba Cloud</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className='feature-layout-box col-md-4 col-sm-6 col-xs-12'>
                        <a href=''>
                            <div className='layout-container'>
                                <div className='shade'></div>
                                <img src='https://www.dbs.com/documents/1055266/33384474/startup-secrets-pd-684x630.jpg/fc93eb0b-b1e9-e2eb-de4e-b0a94911e0c6?t=1587444000761' />
                                <div className='content'>
                                    <h2 style={{ color: '#FFFFFF' }}>How a bank is supporting a startup in INDIA</h2>
                                </div>
                            </div>
                        </a>
                    </li>
                 
                </ul>
            </div>
              {/* Insights */}
              <div className='col-md-12 potm group-header'>
                <h2>Featured Article</h2>
                <div className='layout-box col-md-8 col-sm-6 col-xs-12'>
                    <div className='layout-container'>
                        <div className='img-responsive' style={{ backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYvDk-qqcqVd7pCIVb-Xy9BPR-5AaqjUHJA&usqp=CAU)'}}>
                            <a href=''>
                                <div className='shade'> </div>

                                <img className='img-responsive' src='' />
                                <span className='testimonial-quote'>“</span>


                            </a>


                            <div className='content'>
                                <a className='' href=''>
                                    <h2 style={{ color: '#FFFFFF' }}>What All Aspiring Social Entrepreneurs Need To Knowt</h2>
                                    <p style={{ color: '#FFFFFF' }}>Best Intrepreurs</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='layout-box col-md-4 col-sm-6 col-xs-12' style={{ backgroundColor: '#1C4587', }}>
                    <div className='layout-container'></div>
                    <div style={{ height: '280px' }}></div>
                    <div className='content'>
                        <h2 style={{ color: '#FFFFFF' }}>Decisions that make you win</h2>
                        
                    </div>
                </div>
            </div>
            </div>

            <SmeFooter/>
    </>
  )
}

export default SmeHomePage
