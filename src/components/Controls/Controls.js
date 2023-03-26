import React from "react";

import "./Controls.css";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Controls = ({ numberOfFloors, setActualElevators, actualElevators }) => {
  const floors = [...Array(Number(numberOfFloors)).keys()];

  const handleCallElevator = (i) => {
    const startTime = performance.now();
    const buttonToChange = document.getElementById(i);
    buttonToChange.style.backgroundColor = "red";
    buttonToChange.textContent = "waiting";
    let eid = 0;
    let diff = Math.abs(i - actualElevators[0].floor);

    actualElevators.map((v) => {
      if (Math.abs(i - v.floor) < diff) {
        diff = Math.abs(i - v.floor);
        eid = v.id;
      }
    });

    const newElevatorsArr = actualElevators.map((elevator) =>
      elevator.id === eid ? { id: eid, floor: i } : elevator
    );

    setActualElevators(newElevatorsArr);
    const endTime = performance.now();
    console.log(endTime - startTime);
    sleep(2000).then(() => {
      buttonToChange.textContent = "arrived";
      buttonToChange.style.backgroundColor = "green";
      sleep(2000).then(() => (buttonToChange.textContent = "call"));
    });
  };

  return (
    <div className="controls">
      {floors.map((i) => {
        return (
          <button
            id={i}
            key={i}
            onClick={() => {
              handleCallElevator(i);
            }}
          >
            Call
          </button>
        );
      })}
    </div>
  );
};

export default Controls;
