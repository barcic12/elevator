import React from "react";

import elevatorImg from "../../../assets/elevator.webp";

import "./Elevator.css";

const Elevator = ({ floors, actualElevators, id }) => {
  const elevatorFloor = actualElevators[id] && actualElevators[id].floor;

  return (
    <ul className="elevator">
      {floors.map((i) => {
        return (
          <li key={i}>
            {i === elevatorFloor ? (
              <img src={elevatorImg} alt="elevator illus" />
            ) : (
              <p />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Elevator;
