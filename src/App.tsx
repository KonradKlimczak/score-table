import React from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import ScoreTable from "./components/ScoreTable/ScoreTable";
import { makeStyles } from "@material-ui/core";
import { SeasonCard } from "./components/SeasonCard";

const App: React.FC = () => {
  const winner = {
    player: { id: "1", name: "Konrad" },
    seasonsWon: 3
  };
  const looser = {
    player: { id: "2", name: "Kamil" },
    seasonsWon: 0
  };
  return (
    <div className="App">
      <AppBar />
      <SeasonCard winner={winner} looser={looser} />
      {/* <ScoreTable /> */}
    </div>
  );
};

export default App;
