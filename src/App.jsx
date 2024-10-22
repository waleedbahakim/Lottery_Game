import React from 'react';
import { Lottery } from './Lottery';

function App() {
  return (
    <div>
      {/* Modern Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Lottery Game</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tickets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Results</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Lottery Game Component */}
      <Lottery />
    </div>
  );
}

export default App;
