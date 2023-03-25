import React, { useState } from "react";

import "./Controls.css";

const Controls = ({ numberOfFloors, setActualElevators, actualElevators }) => {
  const [elevatorToUse, setElevatorToUse] = useState(0);

  const floors = [...Array(Number(numberOfFloors)).keys()];

  const handleCallElevator = (i) => {
    setElevatorToUse(2); // call the closest elevator index

    const elevatorsWithRemovedIndex = actualElevators.filter(
      (elevator) => elevator.id !== 2
    );

    setActualElevators([
      ...elevatorsWithRemovedIndex,
      { id: elevatorToUse, floor: i },
    ]);
  };

  return (
    <div className="controls">
      {floors.map((i) => {
        return (
          <button key={i} onClick={() => handleCallElevator(i)}>
            Call
          </button>
        );
      })}
    </div>
  );
};

export default Controls;
