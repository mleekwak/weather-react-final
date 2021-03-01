import React, {useState} from "react";
import "./Weather.css"
import axios from "axios";
import Info from "./Info";

export default function Weather(props){
      const [weatherData, setWeatherData]=useState({ready: false});
     const [city, setCity] =useState(props.defaultCity);
   
     function handleResponse(response){
       setWeatherData ({
           ready: true,
           date: new Date(response.data.dt *1000),
           icon: response.data.weather[0].icon,
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           wind: response.data.wind.speed,
           city: response.data.name,
           humidity: response.data.main.humidity,
           feelsLike: response.data.main.feels_like
       })
    }
  
  
    function handleSubmit(event) {
        event.preventDefault();
       searching();
    }

    function handleCityChange(event){

        setCity(event.target.value);
         
    }
    
    function searching(){
        let apiKey = "545996832190a3bc0bc230c58243bdec";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(url).then(handleResponse);
    }
    
    if (weatherData.ready) 
    return(
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <input type="Search" placeholder ="Search a city" onChange={handleCityChange} />
            <input type="Submit" placeholder ="Search" />
        </form>

       <Info data={weatherData}/>

    </div>
    )
    else {
        searching();
         return "Loading...";
    }

}