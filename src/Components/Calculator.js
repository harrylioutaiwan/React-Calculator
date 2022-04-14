import React from "react";
import "../style/_calculator.scss";
import ButtonBox from "./ButtonBox";
import Display from "./Display";

function Calculator() {

  return (
    <div className="keyPad">
      <Display/>
      <ButtonBox/>
    </div>
  );
}

export default Calculator;
