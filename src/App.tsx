import React from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { makeStyles, CircularProgress } from '@material-ui/core';
import { SeasonCard } from './components/SeasonCard';
import { FirestoreCollection } from 'react-firestore';
import { ISeason } from './utils/types';

const App: React.FC = () => {
  const winner = {
    player: { id: '1', name: 'Konrad' },
    seasonsWon: 3
  };
  const looser = {
    player: { id: '2', name: 'Kamil' },
    seasonsWon: 0
  };
  return (
    <FirestoreCollection<ISeason[]>
      path='seasons'
      render={({ isLoading, data }) => {
        if (isLoading) {
          return (
            <div className='App-loading'>
              <CircularProgress />
            </div>
          );
        }
        return (
          <div className='App'>
            {console.log(data)}
            <AppBar />
            <div className='Dashboard'>
              <SeasonCard winner={winner} looser={looser} />
              <SeasonCard winner={winner} looser={looser} />
              <SeasonCard winner={winner} looser={looser} />
              <SeasonCard winner={winner} looser={looser} />
            </div>
          </div>
        );
      }}
    />
  );
};

export default App;
