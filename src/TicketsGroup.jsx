import React from 'react';

const TicketsGroup = ({ onGenerate, onRestart, onSelectWinner, restartDisabled }) => {
  return (
    <div className='row my-4'>
      <div className='col'>
        <button className="btn btn-success" onClick={onGenerate}>
          New Ticket
        </button>
      </div>
      <div className='col'>
        <button
          className="btn btn-danger"
          onClick={onRestart}
          disabled={restartDisabled}
        >
          Restart Game
        </button>
      </div>
      <div className='col'>
        <button className="btn btn-primary" onClick={onSelectWinner}>
          Select Winner
        </button>
      </div>
    </div>
  );
};

export default TicketsGroup;
