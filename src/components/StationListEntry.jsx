import React from 'react';

const StationListEntry = ({ station, onClick }) => (
  <div onClick={onClick}>
    <div>
      <img src={station.imgUrl} />
    </div>
    <div>
      <h4>{station.name}</h4>
      <ul>
        <li>Reliability: {station.reliability}</li>
        <li>Popularity: {station.popularity}</li>
      </ul>
    </div>
  </div>
);

export default StationListEntry;