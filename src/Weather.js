import React, {useState} from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(){
const [weatherData, setWeatherData]=useState({ready: false});
    function handleResponse(response){
  
       setWeatherData ({
           ready: true,
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           wind: response.data.wind.speed,
           city: response.data.name,
           humidity: response.data.main.humidity,
           feelsLike: response.data.main.feels_like
       })
      
  
    }
  
if (weatherData.ready) 
    return(
    <div className="Weather">
        <form>
            <input type="Search" placeholder ="Search a city" />
            <input type="Submit" placeholder ="Search" />
        </form>

        <h1>Denver</h1>
        <h2>Date and time</h2>
        <h2>{Math.round(weatherData.temperature)}°F</h2>
        <img src="https://openweathermap.org/img/wn/10d@2x.png"/>
        <ul>
            <li>Feels like: {Math.round(weatherData.feelsLike)}°F</li>
            <li>Description: {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind Speed {weatherData.wind}km/h</li>
  
        </ul>

    </div>
    )
    else {
  let apiKey = "545996832190a3bc0bc230c58243bdec";
    let city="Denver";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);

    return "Loading...";
}; 

}