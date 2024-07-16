import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-right">
                <h2>MD.JAKARIA</h2>
                <ul>
                    <li>phone: +8801317536550</li>
                    <li>gmail: jakaria@gmail.com</li>
                </ul>
                <div>
                    <a href="https://www.facebook.com/jakaria.mahmud.7547031" target="_blank" rel="noopener noreferrer">
                        <img src={assets.fb1} alt="" className='fb1' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.inst1} alt="" className='inst1' />
                    </a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkdin2} alt="" className='linkdin1' />
                    </a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>MD.RABBI</h2>
                <ul>
                    <li>phone: +8801623880756</li>
                    <li>gmail: rabbi@gmail.com</li>
                </ul>
                <div>
                    <a href="https://www.facebook.com/fazlayrabbi721" target="_blank" rel="noopener noreferrer">
                        <img src={assets.fb1} alt="" className='fb1' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.inst1} alt="" className='inst1' />
                    </a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkdin2} alt="" className='linkdin1' />
                    </a>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>MD.REDWAN</h2>
                <ul>
                    <li>phone: +8801319867596</li>
                    <li>gmail: redwan@gmail.com</li>
                </ul>
                <div>
                    <a href="https://www.facebook.com/me.redwanhossen" target="_blank" rel="noopener noreferrer">
                        <img src={assets.fb1} alt="" className='fb1' />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.inst1} alt="" className='inst1' />
                    </a>
                    <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkdin2} alt="" className='linkdin1' />
                    </a>
                </div>
            </div>
            <div className="footer-content-left">
                <img src={assets.quickbites8} alt="" className='quickbites8' />
                <p>Food Delivery App</p>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul> 
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+8801317536550</li>
                    <li>contact@quickbites.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 quickbites.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
