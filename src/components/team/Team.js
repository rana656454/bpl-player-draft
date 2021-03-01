import React from 'react';
import './team.css'

const Team = (props) => {
    //const selectedPlayer = props.selectedPlayer
    const {name,picture,price,playing_role} = props.selectedPlayer

    return (
        <div>
          <div>
          <div className="team-player">
          <img src={picture} alt=""/>
          <div className="player-info">
            <h4 className="selected-player-name">{name} <span>({playing_role})</span></h4>
            <h4 className="selected-player-price">${price}</h4>
          </div>

          </div>
             
          </div>
        </div>
    );
};

export default Team;