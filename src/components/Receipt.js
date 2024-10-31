import React from 'react';

const Receipt = ({ booking }) => (
  <div>
    <h2>Receipt</h2>
    <p>Guest: {booking.name}</p>
    <p>Room Type: {booking.roomType}</p>
    <p>Nights: {booking.nights}</p>
    <p>Total: ${booking.nights * 100}</p>
  </div>
);

export default Receipt;
