import React, { useState, useEffect } from "react";
import Starship from "./Starship";

const Starships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="component column centered">
      <h1>Starships</h1>
      {data.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, indx) => <Starship item={item} key={indx} />)
      )}
    </div>
  );
};

export default Starships;
