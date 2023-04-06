import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <Link className="button" to="/facts">
          Click to get facts
        </Link>
      </div>
    </div>
  );
};

export default Home;
