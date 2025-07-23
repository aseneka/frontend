import React, { useState } from 'react';

// ReservationsPage Component: Provides a form for customers to make table reservations.
const ReservationsPage = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    message: ''
  });

  // State for feedback messages to the user
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setMessage('Processing your reservation...'); // Provide immediate feedback

    try {
      // Send reservation data to Flask backend
      const response = await fetch('http://127.0.0.1:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Reservation successful
        setMessage(result.message || 'Reservation successful!');
        setIsSuccess(true);
        // Optionally clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: 1,
          message: ''
        });
      } else {
        // Reservation failed (e.g., no tables available, validation error from backend)
        setMessage(result.message || 'Failed to make reservation. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setMessage('Network error or server is unreachable. Please try again later.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="page-content">
      <section id="reservations" className="reservations-section">
        <div className="reservations-header">
          <h2 className="section-title">Book Your Table</h2>
          <p className="section-subtitle">Reserve a spot for a delightful experience at Caffe Fausse.</p>
        </div>

        <div className="reservation-form-container">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time" className="form-label">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                className="form-input"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests" className="form-label">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                className="form-input"
                placeholder="e.g., 2"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Special Requests (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-textarea"
                placeholder="Any special requests or dietary needs?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-submit-container">
              <button type="submit" className="submit-button">
                Confirm Reservation
              </button>
            </div>
          </form>
          {message && (
            <div className={`form-message ${isSuccess ? 'success-message' : 'error-message'}`}>
              {message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ReservationsPage;
