import logo from './logo.svg';
import './App.css';
import React from "react";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";

function App() {


  return (
    <div className="App">
      <Weather defaultCity="Denver" />
  <br/>
  <hr/>
      This project is created by Michelle Lee
   
    </div>
  );
}

export default App;
