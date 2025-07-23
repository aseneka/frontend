import React from 'react';

// GalleryPage Component: Displays a photo gallery, awards, and customer reviews.
// It receives openLightbox and galleryImages as props from the parent (App.js).
const GalleryPage = ({ openLightbox, galleryImages }) => {
  return (
    <div className="page-content"> {/* Added a wrapper div for consistency */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <h2 className="section-title gallery-title">Our Gallery & Accolades</h2>

          {/* Image Gallery */}
          <div className="image-gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(image)}>
                <img src={image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="awards-section">
            <h3 className="awards-title">Awards & Recognition</h3>
            <ul className="awards-list">
              <li><span className="award-year">2022:</span> Culinary Excellence Award Kenya</li>
              <li><span className="award-year">2023:</span> Restaurant of the Year</li>
              <li><span className="award-year">2023:</span> Best Fine Dining Experience -  The Star Nation</li>
            </ul>
          </div>

          {/* Customer Reviews Section */}
          <div className="reviews-section">
            <h3 className="reviews-title">What Our Customers Say</h3>
            <div className="review-card-grid">
              <div className="review-card">
                <p className="review-text">"Exceptional ambiance and unforgettable flavors. A true culinary gem!"</p>
                <p className="review-author">- Wakadinali Review</p>
              </div>
              <div className="review-card">
                <p className="review-text">"A must-visit restaurant for food enthusiasts. Every dish is a masterpiece."</p>
                <p className="review-author">- Elly Aseneka</p>
              </div>
              {/* Add more reviews as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
