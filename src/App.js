import "./App.css";
import React, { useState, useEffect } from "react";
import Calculator from "./Components/Calculator";
import { displayContext } from "./context/display";

function App() {
  const [displayData, setDisplayData] = useState("");

  return (
    <displayContext.Provider value={{ displayData, setDisplayData }}>
      <Calculator />
    </displayContext.Provider>
  );
}

export default App;
