import React, { useState,useEffect } from 'react';
import axios from 'axios';
import PlayerGUI from './PlayerGUI'
import './App.css'
function App(){
    const[searchPlayerName, setSearchName] = useState("");
    const[searchPlayerTag, setSearchTag] = useState("");
    const [playerInfo, setPlayerInfo] = useState("")
    const [playerData, setPlayerData] = useState({})
    const [playerLeague, setPlayerLeague] = useState({})
    // const [playerHistory,setPlayerHistory] = useState({})
    // const[playerMatchId, setPlayerMatchId] = useState([])
    // const [GameInfo, setGameInfo] = useState({});
    // const [profileIcon, setProfileIcon] = useState['']
    const ApiKey = "RGAPI-ae629e73-f9ad-404c-aec7-5c8b89da5222";
        
        function searchForPlayer(event){
   
            axios.get(`/riot/account/v1/accounts/by-riot-id/${searchPlayerName}/${searchPlayerTag}?api_key=${ApiKey}`)
            .then(function (response){
                setPlayerData(response.data.puuid)

            })
            axios.get(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchPlayerName}?api_key=${ApiKey}`)
            .then(function(response){
                setPlayerInfo(response.data)

            })
           
            // axios.get(`/lol/match/v5/matches/by-puuid/${playerData}/ids?start=20&count=20&api_key=${ApiKey}`)
            // .then(function(response){
            //     setPlayerMatchId(response.data[0])
            //     console.log(playerMatchId)
            // })
            // axios.get(`/lol/match/v5/matches/${playerMatchId}?api_key=${ApiKey}`)
            // .then(function(response){
            //     setPlayerHistory(response.data)
            //     console.log(playerHistory)
            // })
            // axios.get(`/lol/match/v5/matches/${playerMatchId}/timeline?api_key=${ApiKey}`)
            // .then(function(response){
            // setGameInfo(response.data)
            // console.log(GameInfo)
            // })
        }
        function SearchPlayerLeague(){
            axios.get(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerInfo.id}?api_key=${ApiKey}`)
            .then(function(response){
                setPlayerLeague(response.data[1])
                console.log(playerLeague)
                
            })
        }
        async function test(){
            await searchForPlayer()
            await SearchPlayerLeague()
        }
    
        
        return(
            <> 
                <input type="text" name="gameName"  onChange={e => setSearchName(e.target.value)}/> 
                <input type="text" name="gameTag"  onChange={e => setSearchTag(e.target.value)}/> 
                <button onClick={test}>Search</button>  
                <PlayerGUI name={searchPlayerName} icon={playerInfo.profileIconId} level={playerInfo.summonerLevel} tier={playerLeague.tier} rank={playerLeague.rank} wins={playerLeague.wins} losses={playerLeague.losses}/>
            </>
        );
    }

 
export default App;