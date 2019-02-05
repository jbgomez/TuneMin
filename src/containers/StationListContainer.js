import { connect } from 'react-redux';
import StationList from './../components/StationList.jsx';
import changeStation from './../actions/currentStation.js';

const mapStateToProps = state => ({
  stations: state.stationList
});

const mapDispatchToProps = dispatch => ({
  onStationClick: station => dispatch(changeStation(station))
});

var StationListContainer = connect(mapStateToProps, mapDispatchToProps)(StationList);

export default StationListContainer;