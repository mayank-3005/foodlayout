import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-5 bg-success text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <img src="logo.png" className="logo" alt="Logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam consequuntur odit accusamus dolor, earum inventore eligendi expedita cupiditate aut quidem adipisci vitae! Hic sint aspernatur aliquam voluptate neque ipsam, excepturi pariatur sed inventore? Modi suscipit veniam nesciunt, ab vero quisquam?</p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="col-md-3">
            <h3>Our Services</h3>
            <p>Idea Validation</p>
            <p>Legal Service</p>
            <p>Market Research</p>
            <p>Virtual Incubation</p>
            <p>Startup Valuation</p>
          </div>
          <div className="col-md-3">
            <h3>GET IN TOUCH</h3>
            <br />
            <h4>The Circle, Huda City Centre, Gurgaon</h4>
            <br />
            <p className="email-id">info@scalerbee.com</p>
            <br />
            <h4>+91 8920-7610-17</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
