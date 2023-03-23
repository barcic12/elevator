import React from "react";

import "./Controls.css";

const Controls = ({ numberOfFloors }) => {
  const buttonLabel = true ? "call" : "arrived";

  const floors = [...Array(Number(numberOfFloors)).keys()];

  return (
    <div className="controls">
      {floors.map((i) => {
        return <button key={i}>{buttonLabel}</button>;
      })}
    </div>
  );
};

export default Controls;
