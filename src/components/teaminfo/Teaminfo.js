import React from 'react';
import './teaminfo.css'

const Teaminfo = (props) => {
    const seleTeam = props.team
    const TotalPrice = seleTeam.reduce((total,player)=>total+player.price,0)
    //const total = cart.reduce((total,prd)=>total+prd.price,0)
    return (
        <div className="team-info">
        <h4>Total selected Player: {seleTeam.length}</h4>
          <h4>Total Team Price: ${TotalPrice}</h4> 
          <h2>Selected Player Details</h2>
        </div>
    );
};

export default Teaminfo;