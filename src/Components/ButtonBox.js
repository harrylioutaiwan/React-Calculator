import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../style/_buttonBox.scss";

//context
import { useDisplay } from "../context/display";

function ButtonBox(props) {
  const [preText, setPreText] = useState("");
  const [curText, setCurText] = useState("");
  const [operator, setOperator] = useState("");
  const { displayData, setDisplayData } = useDisplay();

  const btnRowValues = [
    ["C", "/", "*"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "."],
  ];

  const btnColValues = ["-", "+", "="];

  //計算功能
  //初始化displayData
  useEffect(() => {
    if (displayData === "") {
      setDisplayData("0");
    } else if (displayData.length > 13) {
      setDisplayData("超過數字上限！");
    } else {
      setDisplayData(displayData);
    }
  }, [displayData]);

  //add to display string
  const addText = (e) => {
    if (curText.includes(".") && e.target.innerText === ".") return;

    if (curText === "" && e.target.innerText === ".") {
      setCurText("0.");
      setDisplayData("0.");
    } else {
      setCurText(e.target.innerText);
      setDisplayData(e.target.innerText);
    }

    if (curText !== "") {
      setCurText(curText + e.target.innerText);
      setDisplayData(curText + e.target.innerText);
    }
  };

  const operatorType = (e) => {
    // setTotal(false);

    if (operator === "") {
      if (curText !== "") {
        setPreText(curText);
        setCurText("");
        setOperator(e.target.innerText);
      } else {
        return;
      }
    } else {
      if (preText !== "" && curText !== "") {
        equals();
        setOperator(e.target.innerText);
      }
    }
  };

  //for calculate btn
  const equals = (e) => {
    if (curText === "" || preText === "") {
      return;
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preText) / parseFloat(curText));
        break;

      case "+":
        cal = String(parseFloat(preText) + parseFloat(curText));
        break;
      case "*":
        cal = String(parseFloat(preText) * parseFloat(curText));
        break;
      case "-":
        cal = String(parseFloat(preText) - parseFloat(curText));
        break;
      default:
        return;
    }
    setDisplayData(cal);
    setPreText(cal);
    setCurText("");
    setOperator("");
  };

  //for reset btn
  const reset = (e) => {
    setDisplayData("0");
    setPreText("");
    setCurText("");
    setOperator("");
  };

  return (
    <>
      <div className="btnGroup">
        <div className="btnRow">
          {btnRowValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "0" ? "btn__wider" : ""}
                value={btn}
                onClick={
                  btn === "C"
                    ? reset
                    : btn === "/" || btn === "*"
                    ? operatorType
                    : addText
                }
              />
            );
          })}
        </div>
        <div className="btnCol">
          {btnColValues.map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn !== "-" ? "btn__higher" : ""}
                value={btn}
                onClick={btn === "=" ? equals : operatorType}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ButtonBox;
