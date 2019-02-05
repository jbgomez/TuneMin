import React from 'react';
import StationListEntry from './StationListEntry';

const StationList = ({ stations, onStationClick }) => (
  <div className="container station-list">
    {
      stations.map(station => (
        <StationListEntry
          key={station.id}
          onClick={() => onStationClick(station)}
          station={station}
        />
      ))
    }
  </div>
);

export default StationList;