import React, { useState } from 'react'

import './SmeCouresel.css'
import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../assets/img/cgYNpliD1647249636.jpg'
// import img2 from '../../assets/img/cgYNpliD1647249636.jpg'
// import img3 from '../../assets/img/uqb6sKZm1647249780.jpg'

function SmeCouresel() {
  
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
  return (
    <div className='container-fluid '>
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       
       <img style={{height:'70vh'}} src='https://media.istockphoto.com/id/1150203445/photo/businessman-using-mobile-online-banking-and-payments-digital-marketing-finance-and-banking.jpg?s=612x612&w=0&k=20&c=FUZkDCSD0gp_VaW_gWGljg69rsa6SMEr6_cokYwOyus=' className='caro-img-cont'/>
       
        <Carousel.Caption>
        <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{height:'70vh'}}  src='https://media.gettyimages.com/id/1294510712/photo/joint-action.jpg?s=1024x1024&w=gi&k=20&c=qNXml5czEa4gJQKHAvxWz3kkgLO4_i4pF_DghJ9QRQc=' className='caro-img-cont'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img style={{height:'70vh'}}  src='https://media.gettyimages.com/id/1344036925/photo/business-on-the-go.jpg?s=612x612&w=0&k=20&c=y2xmwwMELcfu0cxx8kdOo0py67FzYv76tvVxtSx1AyI=' className='caro-img-cont'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </div>
  )
}

export default SmeCouresel
