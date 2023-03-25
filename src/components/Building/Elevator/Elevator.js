import React from "react";

import elevatorImg from "../../../assets/elevator.webp";

import "./Elevator.css";

const Elevator = ({ floors }) => {
  return (
    <ul className="elevator">
      {floors.map((i) => {
        return (
          <li key={i}>
            <img src={elevatorImg} alt="elevator illus" />
          </li>
        );
      })}
    </ul>
  );
};

export default Elevator;
