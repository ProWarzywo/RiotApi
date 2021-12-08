import React, { useState } from 'react';
import './PlayerGUI.css';
import BRONZE from './Images/Emblem_Bronze.png';
import SILVER from './Images/Emblem_Silver.png';
import GOLD from './Images/Emblem_Gold.png';
import PLATINUM from './Images/Emblem_Platinum.png';
import DIAMOND from './Images/Emblem_Diamond.png';
import MASTER from './Images/Emblem_Master.png';
import GRANDMASTER from './Images/Emblem_Grandmaster.png';
import CHALLENGER from './Images/Emblem_Challenger.png';

function PlayerGUI(props){
    const [playerTier, setPlayerTier] = useState("")
    function test(){
        setPlayerTier(props.tier)
    }
    return(
        <div className="playerGUI">
            {props.name}
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${props.icon}.png`} ></img>
            {props.level}
            <img src={playerTier} alt="" />
        </div>
    )
}
export default PlayerGUI