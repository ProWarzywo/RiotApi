import React, { useState } from 'react';
import './PlayerGUI.css';
import GOLD from './Images/Emblem_GOLD.png'
function PlayerGUI(props){
 
    return(
        <div className="playerGUI">
            {props.name}
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${props.icon}.png`} ></img>
            {props.level != undefined ? props.level + " level" : null}

            <div className="sideBlock">
                <div className="rankBox">
                    <img src={`/static/media/Emblem_${props.tier}.617f139e.png`} alt={props.tier} className="RankImg"/> 
                </div>
                <div className="RankInfo">
                    {props.tier != undefined && props.rank != undefined ? props.tier + " " +props.rank : null} <br />
                    <span>
                        {props.wins != undefined ? "Wins: " + props.wins : null}
                        <br />
                        {props.losses != undefined ?"Losses: " + props.losses : null}
                        <br />
                    </span>
                    <span>
                        {props.wins != undefined && props.losses != undefined ? "Winrate: " + ((props.wins/(props.wins + props.losses)) * 100).toFixed(1) + "%" : null}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default PlayerGUI