import React, { useEffect, useState } from "react";

import Building from "./components/Building/Building";
import Controls from "./components/Controls/Controls";

import "./App.css";

const App = () => {
  const [numberOfFloors, setNumberOfFloors] = useState(1);
  const [numberOfElevators, setNumberOfElevators] = useState(1);
  const [actualElevators, setActualElevators] = useState([{ id: 0, floor: 0 }]); // The real elevators Im using

  useEffect(() => {
    const elevatorsToUse = [...Array(Number(numberOfElevators)).keys()].map(
      (id) => {
        return { id: id, floor: 0 };
      }
    );

    setActualElevators(elevatorsToUse);
  }, [numberOfElevators]);

  return (
    <>
      <input
        placeholder="Number of floors"
        type="number"
        onChange={(e) => setNumberOfFloors(e.target.value)}
      />
      <input
        placeholder="Number of elevators"
        type="number"
        onChange={(e) => setNumberOfElevators(e.target.value)}
      />
      <div className="building-container">
        <Building
          numberOfFloors={numberOfFloors}
          numberOfElevators={numberOfElevators}
          actualElevators={actualElevators}
        />
        <Controls
          numberOfFloors={numberOfFloors}
          setActualElevators={setActualElevators}
          actualElevators={actualElevators}
        />
      </div>
    </>
  );
};

export default App;
