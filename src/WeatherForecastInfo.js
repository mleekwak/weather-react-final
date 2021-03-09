import React from "react";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion"
import "./WeatherForecastInfo.css";

export default function WeatherForecastInfo(props){
    function hours(){
    let date = new Date(props.data.dt*1000);
    let hours = date.getHours();
    return `${hours}:00`

    }

    function temperature(){
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°`
    }
    
    
    return <div className="forecastInfo">
    <ul>
    {hours()}
    <WeatherIcon code = {props.data.weather[0].icon} />
    {temperature()}
    </ul>
    </div>
}