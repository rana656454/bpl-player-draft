import React from 'react';
import logo from '../../images/logo.svg'
import './header.css'
const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/> 
           <nav>
           <a href="/myteam">My Team</a>
           <a href="/allteam">All Team Squads</a>
           <a href="/myplayers">My Players</a>
           <a href="/players">Players</a>
           </nav>
        </div>
    );
};

export default Header;