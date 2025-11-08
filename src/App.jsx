import React, { Fragment, useState } from "react";
import styles from "./App.module.css";  
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {

  const [calVal , setCalVal ] =  useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C"){
      setCalVal("");
    } else if (buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <Fragment>
      <h2>
        Welcome to React Calculator
      </h2>

      <div className={styles.calculator}>
        <h1 style={{ textAlign: "center" }}>Calculator</h1>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </Fragment>
  )
}

export default App;
