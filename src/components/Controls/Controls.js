import React, { useState } from "react";

import "./Controls.css";

const Controls = ({ numberOfFloors, setActualElevators, actualElevators }) => {
  const floors = [...Array(Number(numberOfFloors)).keys()];

  const handleCallElevator = (i) => {

    let eid = 0
    let diff = Math.abs(i - actualElevators[0].floor)
    
    actualElevators.map((v)=>{
      if(Math.abs(i - v.floor) < diff){
        diff = Math.abs(i - v.floor)
        eid = v.id
      }
    })

    const newElevatorsArr = actualElevators.map(
      (elevator) => elevator.id === eid ? { id: eid, floor: i}: elevator
    );

    setActualElevators(newElevatorsArr);
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
