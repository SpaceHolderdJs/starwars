import React, { useState, useEffect } from "react";
import Character from "./Character";

const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="component column centered">
      <h1>People</h1>
      {data.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item, indx) => <Character item={item} key={indx} />)
      )}
    </div>
  );
};

export default People;
