import React from 'react';

const StationListEntry = ({ station, onClick }) => (
  <div className="station card my-3 p-3" onClick={onClick}>
    <div className="row">
      <div className="col-auto">
        <img className="img-fluid rounded" src={station.imgUrl} />
      </div>
      <div className="col-auto mt-3">
        <h4 className="station-name">{station.name}</h4>
        <ul className="list-inline mb-0">
          <li className="list-inline-item">Reliability: {station.reliability}</li>
          <li className="list-inline-item">Popularity: {station.popularity}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default StationListEntry;