import { useState } from "react";

const Planet = ({ item }) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    created,
  } = item;
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
          <span>Rotation period: {rotation_period}</span>
          <span>Orbital period: {orbital_period}</span>
          <span>Diameter: {diameter}</span>
          <span>Climate: {climate}</span>
          <span>Gravity: {gravity}</span>
          <span>Terrain: {terrain}</span>
          <span>Population: {population}</span>
          <span>
            Created: {new Date(Date.parse(created)).toLocaleDateString()}
          </span>
        </>
      )}
    </div>
  );
};

export default Planet;
