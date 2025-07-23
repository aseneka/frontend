import React from 'react';

// AboutPage Component: Displays the "About Us" section with the restaurant's story.
const AboutPage = () => {
  return (
    <div className="page-content"> {/* Added a wrapper div for consistency */}
      <section id="about" className="about-section">
        <div className="about-content-wrapper">
          <div className="about-image-container">
            <img src="\images\gallery-cafe-interior.webp" alt="Caffe Fausse Interior" className="about-image" />
          </div>
          <div className="about-text-container">
            <h2 className="section-title">Our Story</h2>
            <p className="about-paragraph">
              Caffe Fausse was founded in 2010 by Chef Antonio Rossi and restaurateur Maria Lopez, blending traditional Italian flavors with modern culinary innovation. Our mission is to provide an unforgettable dining experience that reflects both quality and creativity.
            </p>
            <p className="about-paragraph">
              We meticulously source our beans from the finest regions around the world and prepare our dishes with fresh, local ingredients. Every cup and every plate tells a story of dedication, craftsmanship, and a love for good food. Come and be a part of our story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
