import { connect } from 'react-redux';
import Player from './../components/Player.jsx';

const mapStateToProps = state => ({
  station: state.currentStation,
  active: !!state.currentStation.id
});

const PlayerContainer = connect(mapStateToProps, null)(Player);

export default PlayerContainer;