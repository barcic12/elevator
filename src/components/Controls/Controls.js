import React from "react";

import "./Controls.css";

const Controls = ({ numberOfFloors, setActualElevators, actualElevators }) => {
  const buttonLabel = true ? "call" : "arrived";

  const floors = [...Array(Number(numberOfFloors)).keys()];

  const handleCallElevator = (i) => {
    setActualElevators([{ id: 1, floor: i }]);
  };

  console.log(actualElevators);
  return (
    <div className="controls">
      {floors.map((i) => {
        return (
          <button key={i} onClick={() => handleCallElevator(i)}>
            {buttonLabel}
          </button>
        );
      })}
    </div>
  );
};

export default Controls;
