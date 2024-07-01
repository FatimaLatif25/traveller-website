import React, { useEffect } from "react";
import logo from '../assets/images/logo.svg';
import logo1 from '../assets/images/logo-blue.svg';

const Navbar = () => {
  useEffect(() => {
    const overlay = document.querySelector('[data-overlay]');
    const navOpenBtn = document.querySelector('[data-nav-open-btn]');
    const navCloseBtn = document.querySelector('[data-nav-close-btn]');
    const navbar = document.querySelector('[data-navbar]');
    const navLinks = document.querySelectorAll('[data-nav-link]');

    // Header Sticky
    const header = document.querySelector('[data-header')
    
    window.addEventListener('scroll', function(){
      if (this.window.scrollY >= 200 ){
        header.classList.add('active')
      }
      else {
        header.classList.remove('active')
      }
    })
  
    
    const navElemArr = [navOpenBtn, navCloseBtn, overlay];

    const toggleNav = () => {
      navbar.classList.toggle('active');
      overlay.classList.toggle('active');
    };

    const closeNav = () => {
      navbar.classList.remove('active');
      overlay.classList.remove('active');
    };

    // Add event listeners
    navElemArr.forEach(elem => elem.addEventListener('click', toggleNav));
    navLinks.forEach(link => link.addEventListener('click', closeNav));

    // Cleanup event listeners on component unmount
    return () => {
      navElemArr.forEach(elem => elem.removeEventListener('click', toggleNav));
      navLinks.forEach(link => link.removeEventListener('click', closeNav));
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <a href="tel:055-329322" className="helpline-box">
            <div className="icon-box">
              <div className="fas fa-phone"></div>
            </div>
            <div className="wrapper">
              <p className="helpline-title">For Further Inquires</p>
              <p className="helpline-number">055-329322</p>
            </div>
          </a>
          <a href="#" className="logo">
            <img src={logo} alt="Tourly logo" />
          </a>
          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <div className="fas fa-search"></div>
            </button>
            <button className="nav-open-btn" aria-label="Open menu" data-nav-open-btn>
              <div className="fas fa-bars"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <div className="fab fa-facebook"></div>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <div className="fab fa-twitter"></div>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <div className="fab fa-youtube"></div>
              </a>
            </li>
          </ul>
          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src={logo1} alt="Tourly logo" />
              </a>
              <button className="nav-close-btn" aria-label="Close menu" data-nav-close-btn>
                <div className="fas fa-times"></div>
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">home</a>
              </li>
              <li>
                <a href="#about" className="navbar-link" data-nav-link>about us</a>
              </li>
              <li>
                <a href="#destination" className="navbar-link">destination</a>
              </li>
              <li>
                <a href="#packages" className="navbar-link">Packages</a>
              </li>
              <li>
                <a href="#gallary" className="navbar-link">gallary</a>
              </li>
              <li>
                <a href="#contact us" className="navbar-link">contact us</a>
              </li>
            </ul>
          </nav>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;