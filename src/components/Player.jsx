import React from 'react';
import './../styles/Player.css';

const Player = ({ station, active }) => (
  active &&
  <div className="player fixed-bottom">
    <div className="row align-items-center">
      <div className="col-1">
        <img className="img-fluid" src={station.imgUrl} />
      </div>
      <div className="col-9 mt-3">
        <h6>{station.name}</h6>
        <p>{station.description}</p>
      </div>
      <div className="col-2 text-center">
        <audio controls src={station.streamUrl} />
      </div>
    </div>
  </div>
);

export default Player;