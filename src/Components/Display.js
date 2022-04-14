import React, { useEffect } from "react";
import "../style/_display.scss";

//context
import { useDisplay } from "../context/display";

function Display(props) {
  const { displayData, setDisplayData } = useDisplay();

  useEffect(() => {}, [displayData]);

  return (
    <>
      <div className="display">{displayData}</div>
    </>
  );
}

export default Display;
