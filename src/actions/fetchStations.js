import changeStationList from './stationList';

const fetchStations = () => (
  dispatch => (
    fetch('https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json')
    .then(response => response.json())
    .then(stations => {
      dispatch(changeStationList(stations.data));
    })
  )
);

export default fetchStations;