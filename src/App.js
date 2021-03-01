import React, {useState,useEffect} from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers } from '@fortawesome/free-solid-svg-icons'
import Header from './components/header/Header';
import Player from './components/player/Player';
import Team from './components/team/Team';
import Teaminfo from './components/teaminfo/Teaminfo';
import playersData from "./data/playerdata.json"

function App() {

  const [team,setTeam] = useState([])
  const [players, setPlayers] = useState([])


  useEffect(()=>{
    const allplayer = playersData
     setPlayers(allplayer)
  },[])

  const handleHarePlayer = (player) =>{
    const newTeam = [...team,player]
    setTeam(newTeam)
  
  }
  

  return (
    <div>
     <Header></Header>
     <h1 className="title">Player List for Hare</h1>
    <div className="App">
     
    <div className = "players-container">
 
    <ul>
    {
     players.map(player => <Player handleHarePlayer = {handleHarePlayer} player={player}></Player> )
     
    }
    </ul>
    </div>
    
    <div className="team-container">
     <h2 class="myteam-title"><FontAwesomeIcon icon={faUsers} /> My Team</h2>
        
        <Teaminfo team = {team}></Teaminfo>

        {
          team.map(player=><Team selectedPlayer = {player}></Team>)
        }
          
    </div>
    
    
    </div>
    </div>
  );
}

export default App;
