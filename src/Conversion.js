import React, { useState } from "react";
import "./conversion.css";
export default function Conversion(props) {
  const [unit, setUnit] = useState("farenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function celsius() {
    return ((props.farenheit-32) *(5/9));
  }

  if (unit === "farenheit") {
    return (
      <div className="Conversion">
        <span className="temperature">{Math.round(props.farenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelsius}>°C</a>
        </span> 
      </div>
    );
  } else {
    return (
      <div className="Conversion">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showFarenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}