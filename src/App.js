import React, { useState } from "react";

import Building from "./components/Building/Building";
import Controls from "./components/Controls/Controls";

const App = () => {
  const [numberOfFloors, setNumberOfFloors] = useState(0);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setNumberOfFloors(e.target.value)}
      />
      <div className="app">
        <Building numberOfFloors={numberOfFloors} />
        <Controls numberOfFloors={numberOfFloors} />
      </div>
    </>
  );
};

export default App;
