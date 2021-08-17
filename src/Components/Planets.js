import React, { useState, useEffect } from "react";
import Planet from "./Planet";

const Planets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="component column centered">
      <h1>Planets</h1>
      {data.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, indx) => <Planet item={item} key={indx} />)
      )}
    </div>
  );
};

export default Planets;
