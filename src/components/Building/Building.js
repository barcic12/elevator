import React from "react";

import Elevator from "./Elevator/Elevator";

import "./Building.css";

const Building = ({ numberOfFloors, numberOfElevators, actualElevators }) => {
  const floors = [...Array(Number(numberOfFloors)).keys()];
  const elevators = [...Array(Number(numberOfElevators)).keys()];

  return (
    <div className="building">
      {elevators.map((i) => (
        <Elevator
          key={i}
          id={i}
          floors={floors}
          actualElevators={actualElevators}
        />
      ))}
    </div>
  );
};

export default Building;
