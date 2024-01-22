import React from "react";
import Main from "../Components/Main";
import Rows from "../Components/Rows";
import request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Rows rowId="1" title="Upcoming" fetchURL={request.requestUpcoming} />
      <Rows rowId="2" title="Popular" fetchURL={request.requestPopular} />
      <Rows rowId="3" title="Trending" fetchURL={request.requestTrending} />
      <Rows rowId="4" title="Top Rated" fetchURL={request.requestToprated} />
      <Rows rowId="5" title="Horror" fetchURL={request.requestHorror} />
    </>
  );
};

export default Home;
