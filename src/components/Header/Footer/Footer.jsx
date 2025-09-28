import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h4 className='footer-h4'>Inheritas</h4>
          <p>
            A unit of Three Keys Consulting FZ LLC<br />
          </p>
          <p>
            RAK Address: Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
          </p>
          <p>
            Dubai Address: 18th Floor, Sheikh Rashid Tower, DWTC, Dubai, United Arab Emirates
          </p>
        </div>

        <div>
          <h4 className='footer-h4'>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className='footer-h4'>Contact Us</h4>
          <p>Email: <a href="mailto:Sanjana.inheritas@gmail.com">Sanjana.inheritas@gmail.com</a></p>
          <p>Phone: 0585944811</p>
          <p>Working Hours: Mon – Fri : 09:00 AM – 06:00 PM</p>
        </div>
      </div>

      <hr />

      <p className="copyright">
        &copy; {new Date().getFullYear()} Inheritas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
