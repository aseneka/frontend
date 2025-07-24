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
              Caffe Fausse began not in a bustling city, but amidst the verdant, high-altitude coffee farms of Kenya. Our founder, a passionate coffee enthusiast, spent years immersing themselves in the rich traditions of Kenyan coffee cultivation, learning directly from the farmers whose families have perfected the art for generations. It was here, surrounded by the vibrant landscapes and the aroma of exceptional beans, that the vision for Caffe Fausse was born: to bring the true essence of coffee, from its African roots to your cup, blended with a culinary journey that excites the sense
            </p>
            <p className="about-paragraph">
              We meticulously source our beans, with a special emphasis on the bright, complex flavors found in Kenyan highlands. Every cup brewed at Caffe Fausse is a testament to this journey, a dedication to quality that extends to every dish we prepare. Our mission is to provide an unforgettable dining experience that reflects both the unparalleled quality of our ingredients and the innovative spirit of our culinary team. Come, taste the legacy, and be a part of our story, where every sip and every plate tells a tale of dedication, craftsmanship, and a profound love for good food.

            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
