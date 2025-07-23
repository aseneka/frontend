import React from 'react';

// HomePage Component: Displays the hero section of the website.
const HomePage = () => {
  // Define the background image style here
  const heroStyle = {
    backgroundImage: 'url("/images/home-cafe-fausse.webp")', // Path to your image in public/images/
  };

  return (
    <div className="page-content">
      <section id="home" className="hero-section" style={heroStyle}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Caffe Fausse</h1>
          <p className="hero-subtitle">Experience the finest coffee and culinary delights.</p>
          <a href="#reservations" className="hero-button">
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
