import React from 'react';
import StationListContainer from './../containers/StationListContainer';
import PlayerContainer from './../containers/PlayerContainer';
import Header from './Header';

const App = () => (
  <React.Fragment>
    <Header />
    <StationListContainer />
    <PlayerContainer />
  </React.Fragment>
);

export default App;