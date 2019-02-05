import { connect } from 'react-redux';
import StationList from './../components/StationList.jsx';
import changeStation from './../actions/currentStation.js';
import fetchStations from './../actions/fetchStations.js';

const mapStateToProps = state => ({
  stations: state.stationList
});

const mapDispatchToProps = dispatch => ({
  onStationClick: station => dispatch(changeStation(station)),
  fetchStations: dispatch(fetchStations())
});

var StationListContainer = connect(mapStateToProps, mapDispatchToProps)(StationList);

export default StationListContainer;