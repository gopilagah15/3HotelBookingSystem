import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [booking, setBooking] = useState({ name: '', roomType: '', nights: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(booking);
    setBooking({ name: '', roomType: '', nights: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Hotel Booking Form</h2>
      <input type="text" name="name" placeholder="Name" value={booking.name} onChange={handleChange} required />
      <select name="roomType" value={booking.roomType} onChange={handleChange} required>
        <option value="">Select Room Type</option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Suite">Suite</option>
      </select>
      <input type="number" name="nights" placeholder="Nights" value={booking.nights} onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
