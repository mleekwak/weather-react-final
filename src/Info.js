import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import Conversion from "./Conversion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./info.css";

export default function Info(props){

    return   <div className="WeatherInfo">
    <div className="container">
  
        <h1>{props.data.city}</h1>
        <h2><FormattedDate date ={props.data.date} /> </h2>
   
  <div className="row">
    <div className="col-5">
        <h2> <Conversion farenheit={Math.round(props.data.temperature)}/></h2>

    </div>
     <div className="col-1">
           <WeatherIcon code={props.data.icon} />
     </div>

      <div className="col-6">
        <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°F</li>
            <li>Description: {props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed {props.data.wind}km/h</li>
        </ul>
        
    </div> 
        </div>
        <WeatherForecast city={props.data.city}/>
    </div>
    </div>
}