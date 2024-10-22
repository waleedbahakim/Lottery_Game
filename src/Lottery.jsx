import React, { useState } from 'react';
import './App.css'; // Ensure this file exists for styles

export const Lottery = () => {
  const [tickets, setTickets] = useState(0);
  const [winningSum, setWinningSum] = useState(0);
  const [ticketList, setTicketList] = useState([]);
  const [currentTicketIndex, setCurrentTicketIndex] = useState(-1);
  const [winningTicket, setWinningTicket] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  const [restartDisabled, setRestartDisabled] = useState(true);
  const [generateDisabled, setGenerateDisabled] = useState(false); // New state to manage button

  // Generate random tickets based on the entered number of tickets
  const generateTickets = () => {
    const newTicketList = [];
    for (let i = 0; i < tickets; i++) {
      newTicketList.push(Math.floor(Math.random() * 10000) + 1); // Random number between 1 and 10000
    }
    setTicketList(newTicketList);
    setCurrentTicketIndex(0); // Show the first ticket
    setIsWinner(false);
    setWinningTicket(null);
    setRestartDisabled(true); // Disable restart initially
    setGenerateDisabled(true); // Disable generate button
  };

  // Display the next ticket (looping through in sequence)
  const displayNextTicket = () => {
    if (ticketList.length > 0) {
      setCurrentTicketIndex((currentTicketIndex + 1) % ticketList.length); // Loop back to the first ticket after the last one
    }
  };

  // Select the winning ticket
  const selectWinningTicket = () => {
    if (ticketList.length === 0) return;
    const randomIndex = Math.floor(Math.random() * ticketList.length);
    setWinningTicket(ticketList[randomIndex]);
    setIsWinner(true);
    setRestartDisabled(false); // Enable restart once a winner is selected
    setGenerateDisabled(false); // Re-enable generate button after selecting the winner
  };

  // Restart the game
  const restartGame = () => {
    setTickets(0);
    setWinningSum(0);
    setTicketList([]);
    setCurrentTicketIndex(-1);
    setWinningTicket(null);
    setIsWinner(false);
    setRestartDisabled(true); // Disable restart after game resets
    setGenerateDisabled(false); // Re-enable generate button after reset
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="mb-4">Lottery Game</h1>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="ticketsInput"
                  placeholder="Enter number of tickets"
                  value={tickets}
                  onChange={(e) => setTickets(Number(e.target.value))}
                />
                <label htmlFor="ticketsInput">Number of Tickets</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="winningSumInput"
                  placeholder="Enter winning sum"
                  value={winningSum}
                  onChange={(e) => setWinningSum(Number(e.target.value))}
                />
                <label htmlFor="winningSumInput">Winning Sum</label>
              </div>

              <button
                className="btn btn-success my-2 w-100"
                onClick={generateTickets}
                disabled={generateDisabled}
              >
                Generate Tickets
              </button>

              <button
                className="btn btn-primary my-2 w-100"
                onClick={displayNextTicket}
                disabled={ticketList.length === 0}
              >
                Show Next Ticket
              </button>

              <button
                className="btn btn-info my-2 w-100"
                onClick={selectWinningTicket}
                disabled={ticketList.length === 0 || isWinner}
              >
                Select Winner
              </button>

              <button
                className="btn btn-danger my-2 w-100"
                onClick={restartGame}
                disabled={restartDisabled}
              >
                Restart Game
              </button>

              
              {currentTicketIndex !== -1 && ticketList.length > 0 && (
                <div className="ticket-display alert alert-info mt-3">
                  Ticket: {ticketList[currentTicketIndex]}
                </div>
              )}

              {/* Display the winning ticket */}
              {isWinner && winningTicket && (
                <div className="alert alert-success mt-4">
                  🎉 Winning Ticket: <strong>{winningTicket}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lottery;
