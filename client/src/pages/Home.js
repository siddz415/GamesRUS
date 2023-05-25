import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import GameList from "../components/GameList";
import LatestReviews from "./LatestReviews";
// import { Carousel } from 'antd';
// import SearchBar from "../components/SearchBar";
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };


const Home = () => {
  return (
    <div className="container">

      {/* <SearchBar /> */}
      {/* <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel> */}

      <CategoryMenu />
      <GameList />
      <Cart />
    </div>
  );
};

export default Home;
