import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../pages/Game.js'


function SearchBar() {
    const [query, setQuery] = useState("");
    console.log("test")
    const [results, setResults] = useState([]);
    const { reviewName } = useParams();
    useEffect(() => {
        (async function () {
            if (reviewName) {
                const name = reviewName.split('%20').join(' ')
                console.log(name);
                const response = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${name}?key=27ae40d1abda4b659f3bfbf70358e069`, {
                    method: "GET",
                    headers: {
                        'X-RapidAPI-Key': '43a2bcc45cmshefbee6180e2b70fp160174jsn60117875f485',
                        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                console.log(data)
                setResults([data]);
            }
        })()
    }, [])
    const handleSearch = async (event) => {
        event.preventDefault();

        const response = await fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${query}?key=27ae40d1abda4b659f3bfbf70358e069`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': '43a2bcc45cmshefbee6180e2b70fp160174jsn60117875f485',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            }
        });
        const data = await response.json();
        console.log(data)
        setResults([data]);
        console.log(setResults)
    };
    console.log(results)

    // const App = () =>{
    return (

        <div>
            <form className='float' onSubmit={handleSearch}>
                <input type="text" value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit">Search</button>
            </form>

            {results.map((game) => {
                return (
                    <Card name={game.name} description={game.description} background={game.background_image} />
                )
            }
            )}
            <div className='app'>
                <Card title='My Card' description='' />
            </div>




        </div>
    )
}
export default SearchBar;