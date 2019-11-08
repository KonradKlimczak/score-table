import React from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import ScoreTable from './components/ScoreTable/ScoreTable';
import { makeStyles } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className='App'>
      <AppBar />
      <ScoreTable />
    </div>
  );
};

export default App;
