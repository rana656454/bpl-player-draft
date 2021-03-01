import React from 'react';
import "./player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Player = (props) => {
    
    const {name,picture,major_team,playing_role,totat_t20_match,totat_t20_run,t20_batting_average,batting_strike_rate,
        t20_highest_score,t20_century,t20_fifty,t20_wicket,t20_highest_wicket,price,more_details} = props.player
    return (
        <div className="player-container">
        <img src={picture} alt=""/>
        <div className="player-details">
        <h2 className="pname">Name: <span>{name}</span></h2>
        <br/>
            <p>Major Team: <span>{major_team}</span></p>
            <p>Playing Role: <span>{playing_role}</span></p>
            <p>Total Match(T20): <span>{totat_t20_match}</span></p>
            <p><span>Total Run(T20): {totat_t20_run}</span><span>Total Wicket: {t20_wicket}</span></p>
            <p><span>Average: {t20_batting_average} </span> <span>Strike Rate: {batting_strike_rate}</span> </p>
            <p><span>Highest Score: {t20_highest_score} </span> <span>Highest Wicket: {t20_highest_wicket}</span> </p>
            <p><span>Century: {t20_century} </span> <span>Fifty: {t20_fifty}</span> </p>
            <a href={more_details} target="_blank" rel="noreferrer" className="btn btn-info">For More Details</a>            
        </div>
        <div className="hare-price">
            <h3>Price:${price}</h3>
            <button className="btn btn-primary hare-btn" onClick={()=>props.handleHarePlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart} /> Hare <span>{name}</span></button>
        </div>
            
        </div>
                   
    );
};

export default Player;
