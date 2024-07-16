import React from 'react'
import './Navbar.css'

import { assets } from './../../../../admin/src/assets/assets';
//import { assets } from './../../../../frontend/src/assets/assets';



const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.qb1} alt=""  />
        <img className='profile' src={assets.jakaria} alt=""  />
      
    </div>
  )
}

export default Navbar
