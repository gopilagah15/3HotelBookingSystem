import React from 'react';

const BookingReport = ({ bookings }) => {
  const totalBookings = bookings.length;
  const revenue = bookings.reduce((acc, booking) => acc + booking.nights * 100, 0);

  return (
    <div>
      <h2>Booking Report</h2>
      <p>Total Bookings: {totalBookings}</p>
      <p>Total Revenue: ${revenue}</p>
    </div>
  );
};

export default BookingReport;
