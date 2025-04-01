import React from 'react';
import { Link } from 'react-router-dom';
import AceBot from '../assets/AceBot.webp';
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
            <Link><img src={AceBot} alt="" /></Link>
        </div>
        <ul className='Navlinks'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/aboutus'>About us</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>

        </ul>
        <button className='login-btn'>Login</button>
      
    </div>
  )
}

export default Navbar
