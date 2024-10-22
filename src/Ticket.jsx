import React from 'react';

export const Ticket = ({ ticketNumber }) => {
  return (
    <div className="alert alert-info text-center">
      {ticketNumber}
    </div>
  );
};

export default Ticket;
