import { useState } from "react";

const Starship = ({ item }) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    crew,
    passengers,
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
          <span>Model: {model}</span>
          <span>manufacturer: {manufacturer}</span>
          <span>Price: {cost_in_credits}</span>
          <span>Crew: {crew}</span>
          <span>Passangers: {passengers}</span>
          <span>
            Created: {new Date(Date.parse(created)).toLocaleDateString()}
          </span>
        </>
      )}
    </div>
  );
};

export default Starship;
