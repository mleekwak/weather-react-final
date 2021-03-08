import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import Conversion from "./Conversion";
import "./info.css";

export default function Info(props){

    return <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <h2><FormattedDate date ={props.data.date} /> </h2>
        <h2> <Conversion farenheit={Math.round(props.data.temperature)}/></h2>
       
           <WeatherIcon code={props.data.icon} />
        <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)}°F</li>
            <li>Description: {props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed {props.data.wind}km/h</li>
        </ul>
        <WeatherForecast city={props.data.city}/>

    </div>;
}