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
  )
}

export default SmeCouresel
