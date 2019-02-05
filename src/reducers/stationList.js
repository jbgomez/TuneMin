const stationListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_STATION_LIST') {
    return action.stationList;
  } else {
    return state;
  }
};

export default stationListReducer;
