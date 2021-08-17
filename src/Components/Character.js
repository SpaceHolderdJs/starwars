import React, { useState, useEffect } from "react";

const Character = ({ item }) => {
  const { name, height, mass, gender, created, birth_year } = item;
  const [more, setMore] = useState(false);

  return (
    <div className="card column">
      <div className="row centered" style={{ justifyContent: "space-between" }}>
        <h2>{name}</h2>
        <button onClick={() => setMore(!more)}>
          {!more ? "More" : "Less"}
        </button>
      </div>
      {more && (
        <>
          <div className="divider"></div>
          <span>Height: {height}</span>
          <span>Mass: {mass}</span>
          <span>Gender: {gender}</span>
          <span>Birthday: {birth_year}</span>
          <span>
            Created: {new Date(Date.parse(created)).toLocaleDateString()}
          </span>
        </>
      )}
    </div>
  );
};

export default Character;
