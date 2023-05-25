import React, { useState } from 'react';
// import { Card } from 'antd';

// const { Meta } = Card;
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
            {/* {results &&  (
                <Card key={results.id}>
                hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={results.background_image} />}
  
    <Meta title={results.name} description={results.description} />
                </Card>
            )} */}
        </div>
    )
}
export default SearchBar;