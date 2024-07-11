/*
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Carousel 
        showArrows={true} 
        autoPlay 
        infiniteLoop
        interval={3000} 
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="/header_img1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/header_img2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/header_img3.png" alt="Slide 3" />
        </div>
        <div>
          <img src="/header_img4.png" alt="Slide 4" />
        </div>
        <div>
          <img src="/header_img5.png" alt="Slide 5" />
        </div>
      </Carousel>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

*/


import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header

