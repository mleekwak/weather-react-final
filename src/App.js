import logo from './logo.svg';
import './App.css';
import React from "react";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";

function App() {


  return (
    <div className="App">
      <Weather defaultCity="Denver" />

 </div>
 

  <div className="Footer">This <a href="https://github.com/mleekwak/weather-react-final">open-source project</a> is created by Michelle Lee
 </div>
 
  );
}

export default App;
