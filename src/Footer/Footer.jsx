import React from 'react';
import { FaFacebookSquare, FaFirefox, FaOpera, FaTiktok, FaSkype, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      
        <div className='d-flex justify-content-between bg-secondary p-5 w-full'>
          <div>
            <h2>ABOUT NEC</h2>
            <h4>About</h4>
            <h4>Shop</h4>
            <h4>Work With Me</h4>
            <h4>Contact</h4>
          </div>
          <div>
            <h2>EXPLORE</h2>
            <h4>Recipes</h4>
            <h4>Fitness</h4>
            <h4>Healthy Living</h4>
            <h4>Blog</h4>
          </div>
          <div>
            <h2>CONNECT</h2>
            <div className='mr-2'>
            <FaFacebookSquare />
            <FaFirefox />
            <FaOpera />
            <FaTiktok />
            <FaSkype />
            <FaInstagram />
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Footer;