
import React from 'react';
import SearchBar from "../components/SearchBar";
import xbox from "../assets/xbox.png";

const Game = () => {
    return (
     <div>   
        <SearchBar/>

        <img src={xbox} alt="pic" className='ps5'/>
</div>   
    )
};

export default Game;