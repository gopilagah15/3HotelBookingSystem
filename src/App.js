import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import Receipt from './components/Receipt';
import BookingReport from './components/BookingReport';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const handleBooking = (booking) => {
    setCurrentBooking(booking);
    setBookings((prev) => [...prev, booking]);
  };

  return (
    <div>
      <h1>Hotel Booking System</h1>
      <BookingForm onBook={handleBooking} />
      {currentBooking && <BookingConfirmation booking={currentBooking} />}
      {currentBooking && <Receipt booking={currentBooking} />}
      <BookingReport bookings={bookings} /> {/* Pass bookings array to BookingReport */}
    </div>
  );
};

export default App;
