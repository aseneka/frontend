import React, { useState, useEffect } from 'react';
import ContactFooter from './ContactFooter'; // Import the ContactFooter component

// Layout Component: Provides a consistent navigation bar and footer for all pages.
// It uses the 'children' prop to render the specific content of each page.
const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile navigation

  // Function to toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close mobile nav when hash changes (i.e., user navigates)
  useEffect(() => {
    const handleHashChange = () => {
      setIsNavOpen(false);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo/Brand Name */}
          <a href="#home" className="navbar-brand">Caffe Fausse</a>

          {/* Mobile Menu Button */}
          <div className="menu-button-mobile">
            <button onClick={toggleNav} className="menu-toggle">
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="navbar-links-desktop">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#reservations" className="nav-link">Reservations</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="navbar-links-mobile">
            <a href="#home" onClick={toggleNav} className="nav-link-mobile">Home</a>
            <a href="#about" onClick={toggleNav} className="nav-link-mobile">About Us</a>
            <a href="#menu" onClick={toggleNav} className="nav-link-mobile">Menu</a>
            <a href="#reservations" onClick={toggleNav} className="nav-link-mobile">Reservations</a>
            <a href="#gallery" onClick={toggleNav} className="nav-link-mobile">Gallery</a>
            <a href="#contact" onClick={toggleNav} className="nav-link-mobile">Contact</a>
          </div>
        )}
      </nav>

      {/* Main content area where individual pages will be rendered */}
      <main className="main-content-area">
        {children} {/* This is where the specific page content will be injected */}
      </main>

      {/* Contact and Footer Section - common to all pages */}
      <ContactFooter />
    </div>
  );
};

export default Layout;
