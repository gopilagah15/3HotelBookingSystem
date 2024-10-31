import React from 'react';

const BookingConfirmation = ({ booking }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Guest Name: {booking.name}</p>
      <p>Room Type: {booking.roomType}</p>
      <p>Nights: {booking.nights}</p>
      <h3>Total: ${booking.nights * 100}</h3> {/* Example rate */}
    </div>
  );
};

export default BookingConfirmation;
