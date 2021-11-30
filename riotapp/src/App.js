import React, { useState } from 'react';
import axios from 'axios';



function App(){
    const[searchPlayerName, setSearchName] = useState("");
    const[searchPlayerTag, setSearchTag] = useState("");
    const[playerMatchId, setPlayerMatchId] = useState([])
    const [playerData, setPlayerData] = useState({})
    const [playerHistory,setPlayerHistory] =useState({})

        function searchForPlayer(event){
            const ApiKey = "RGAPI-0547c5b1-376f-47af-b6b8-607031da3f5f";
            axios.get(`/riot/account/v1/accounts/by-riot-id/${searchPlayerName}/${searchPlayerTag}?api_key=${ApiKey}`)
            .then(function (response){
                setPlayerData(response.data.puuid)
                console.log(playerData)
            })
            axios.get(`/lol/match/v5/matches/by-puuid/${playerData}/ids?start=20&count=20&api_key=${ApiKey}`)
            .then(function(response){
                setPlayerMatchId(response.data[0])
            })
            axios.get(`/lol/match/v5/matches/${playerMatchId}?api_key=${ApiKey}`)
            .then(function(response){
                setPlayerHistory(response.data)
                console.log(playerHistory)
            })
        }
      

        return(
            <>
                <input type="text" name="gameName"  onChange={e => setSearchName(e.target.value)}/> 
                <input type="text" name="gameTag"  onChange={e => setSearchTag(e.target.value)}/> 
                <button onClick={searchForPlayer}>Search</button>  
            </>
        );
    }

 
export default App;