import React from 'react';
import './../styles/Player.css';

const Player = ({ station, active }) => (
  active &&
  <div className="player fixed-bottom">
    <div className="row align-items-center">
      <div className="col-12 col-md-1 text-center text-md-left">
        <img className="img-fluid" src={station.imgUrl} />
      </div>
      <div className="col-12 col-md-9 mt-3 mx-2 mx-md-0">
        <h6>{station.name}</h6>
        <p>{station.description}</p>
      </div>
      <div className="col-12 col-md-2 text-center">
        <audio controls src={station.streamUrl} />
      </div>
    </div>
  </div>
);

export default Player;