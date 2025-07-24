import React, { useState, useEffect } from 'react';
import './App.css'; // Import the custom CSS file

// Import the Layout component
import Layout from './components/Layout';

// Import the new modular page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import GalleryPage from './pages/GalleryPage';

// Main App component: Handles routing and global state like lightbox.
const App = () => {
  // State for managing current page based on URL hash
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#home');
  // State to manage the content being displayed for transition
  const [displayContent, setDisplayContent] = useState(null);
  // State to control the fade-in/fade-out class
  const [fadeClass, setFadeClass] = useState('fade-in');

  // State for managing lightbox visibility and current image
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Gallery images data (remains in App.js as it's passed to GalleryPage and used by lightbox)
  const galleryImages = [
    '/images/gallery-special-event.webp', // Example: Ensure these paths exist in public/images/
    '/images/caffe fausse award.png',
    '/images/caffe fausse interiror 1.png',
    '/images/caffe fause interior 2.png',
    '/images/caffe fausse exterior 1.png',
    '/images/caffe fasusse exterior 2.png',
  ];

  // Function to open lightbox
  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage('');
  };

  // Function to render the current page component based on the hash
  const renderPageContent = (pageHash) => {
    switch (pageHash) {
      case '#home':
        return <HomePage />;
      case '#about':
        return <AboutPage />;
      case '#menu':
        return <MenuPage />;
      case '#reservations':
        return <ReservationsPage />;
      case '#gallery':
        return <GalleryPage openLightbox={openLightbox} galleryImages={galleryImages} />;
      case '#contact':
        // For #contact, we just render a placeholder or redirect to home if no specific page content
        // The ContactFooter is part of the Layout, so it's always visible.
        // If you want a dedicated contact *page*, you'd create ContactPage.js
        return <HomePage />; // Redirect to home or a specific contact page if created
      default:
        return <HomePage />;
    }
  };

  // Effect to handle page changes and transitions
  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';

      // If hash hasn't changed, ensure content is visible and exit
      if (newHash === currentPage) {
        setFadeClass('fade-in');
        return;
      }

      setFadeClass('fade-out'); // Start fading out current content

      // After fade-out, update content and fade in
      const transitionOutTimeout = setTimeout(() => {
        setCurrentPage(newHash); // Update the current page hash
        setDisplayContent(renderPageContent(newHash)); // Set new content
        setFadeClass('fade-in'); // Start fading in new content
      }, 300); // This should match the CSS transition duration

      return () => clearTimeout(transitionOutTimeout);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial load: set initial content and fade in
    setDisplayContent(renderPageContent(currentPage));
    setFadeClass('fade-in'); // Ensure it starts visible

    // Clean up the event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentPage]); // Depend on currentPage to re-run when it's updated internally

  return (
    <Layout>
      {/* Render the current page content with transition classes */}
      <div className={`page-transition ${fadeClass}`}>
        {displayContent}
      </div>

      {/* Lightbox Component - remains in App.js as it's global overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={currentImage} alt="Enlarged Gallery Image" className="lightbox-image" />
            <button className="lightbox-close-button" onClick={closeLightbox}>&times;</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;
