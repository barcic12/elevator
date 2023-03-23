import React from "react";

import Elevator from "./Elevator/Elevator";

import "./Building.css";

const Building = ({ numberOfFloors }) => {
  const floors = [...Array(Number(numberOfFloors)).keys()];

  return (
    <div className="building">
      {floors.map((i) => (
        <Elevator key={i} />
      ))}
    </div>
  );
};

export default Building;
