import React from 'react';
import '../footer.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
           <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify"></p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li><Link to="/">Trending</Link></li>
          <li><Link to="/national">National</Link></li>
          <li><Link to="/business">Bussiness</Link></li>
          <li><Link to="/sport">Sports</Link></li>
          <li><Link to="/world">World</Link></li>
          <li><Link to="/politics">Politics</Link></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a  href="#">Contact Us</a></li>
          <li><a  href="#">Contribute</a></li>
          <li><a  href="#">Privacy Policy</a></li>
          <li><a  href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#"> Nitesh</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
          <li><a className="twitter" href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>

          

            
        </div>
    );
}

export default Footer;
