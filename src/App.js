import React, { useState } from "react";

import Building from "./components/Building/Building";
import Controls from "./components/Controls/Controls";

import "./App.css";

const App = () => {
  const [numberOfFloors, setNumberOfFloors] = useState(1);
  const [numberOfElevators, setNumberOfElevators] = useState(1);

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
        />
        <Controls numberOfFloors={numberOfFloors} />
      </div>
    </>
  );
};

export default App;
