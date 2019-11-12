import { Card, CircularProgress } from '@material-ui/core';
import React from 'react';
import { FirestoreCollection } from 'react-firestore';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import { MatchList } from './components/MatchList';
import { SeasonCard } from './components/SeasonCard';
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
              <Card>
                <MatchList />
              </Card>
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
