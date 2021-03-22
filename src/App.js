
import './App.css'
import data from './Data/playersData.json';
import React, { useEffect, useState } from 'react';
import Player from './Components/Player/Player';
import Selected from './Components/Selecte/Selected';
// console.log(data);



const App = () => {
  const [player, serPlayer] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    serPlayer(data)
  }, [])

  const handleSelectedPlayer = (players) => {
    
    const newSelectPlayer = [...selectedPlayer, players]
    setSelectedPlayer(newSelectPlayer);

  }

  return (
    <div className="App">
      <div className="players">
        <div className="player-card">
          {
            player.map(players => <Player key={players.id} handleSelectedPlayer={handleSelectedPlayer} players={players} />)
          }
        </div>
      </div>
      <div className="selectedPlayer">

           <Selected selectedPlayer={selectedPlayer} />
      </div>

    </div>
  );
};

export default App;