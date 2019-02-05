import { combineReducers } from 'redux';
import stationList from './stationList.js';
import currentStation from './currentStation.js';

const rootReducer = combineReducers({ stationList, currentStation });

export default rootReducer;