import React, { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

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
        setResults(data);

    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit">Search</button>
            </form>
            {results &&  (
                <div key={results.id}>{results.name}</div>
            )}
        </div>
    )
}
export default SearchBar;