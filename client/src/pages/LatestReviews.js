import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://opencritic-api.p.rapidapi.com/game/recently-released', {
          headers: {
            'x-rapidapi-host': 'opencritic-api.p.rapidapi.com',
            'x-rapidapi-key': 'c102ffcecemsh31fee262b485c63p1b464fjsn535ea8fa7b4e',
          },
        });
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Latest Reviews</h1>
      {console.log(reviews)}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h2><Link to={`/search/${review.name}`}>{review.name}
            </Link></h2>
            <p>Review Tier: {review.tier}</p>
            <p>Highest Score: {review.topCriticScore}</p>
            <a href={`https://opencritic.com/${review.images.banner.sm}`}><img src={`https://img.opencritic.com/${review.images.banner.sm}`} /></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestReviews;
