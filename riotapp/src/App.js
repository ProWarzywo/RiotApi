import React, { useState } from 'react';
import axios from 'axios';
import PlayerGUI from './PlayerGUI'
import './App.css'
function App(){
    const[searchPlayerName, setSearchName] = useState("");
    const[searchPlayerTag, setSearchTag] = useState("");

    const [playerInfo, setPlayerInfo] = useState("")
    const[playerMatchId, setPlayerMatchId] = useState([])
    const [playerData, setPlayerData] = useState({})
    const [playerHistory,setPlayerHistory] = useState({})
    const [playerLeague, setPlayerLeague] = useState({})

    const [GameInfo, setGameInfo] = useState({});
    // const [profileIcon, setProfileIcon] = useState['']
        function searchForPlayer(event){
            const ApiKey = "RGAPI-a6876056-0f9c-43d5-bf98-dc112b3f8b60";
            axios.get(`/riot/account/v1/accounts/by-riot-id/${searchPlayerName}/${searchPlayerTag}?api_key=${ApiKey}`)
            .then(function (response){
                setPlayerData(response.data.puuid)

            })
            axios.get(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchPlayerName}?api_key=${ApiKey}`)
            .then(function(response){
                setPlayerInfo(response.data)
                console.log(playerInfo.id)
            })
            axios.get(`https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerInfo.id}?api_key=${ApiKey}`)
            .then(function(response){
                setPlayerLeague(response.data[1])
               console.log(playerLeague)
            
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
      

        return(
            <> 
                <input type="text" name="gameName"  onChange={e => setSearchName(e.target.value)}/> 
                <input type="text" name="gameTag"  onChange={e => setSearchTag(e.target.value)}/> 
                <button onClick={searchForPlayer}>Search</button>  
                <PlayerGUI name={searchPlayerName} icon={playerInfo.profileIconId} level={playerInfo.summonerLevel} tier={playerLeague.tier} rank={playerLeague.rank}/>
            </>
        );
    }

 
export default App;