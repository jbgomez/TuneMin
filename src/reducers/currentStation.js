const currentStationReducer = (state = {}, action) => {
  if (action.type === 'CHANGE_STATION') {
    return action.currentStation;
  } else {
    return state;
  }
};

export default currentStationReducer;