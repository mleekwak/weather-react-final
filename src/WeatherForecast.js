import React, {useState} from "react";

import axios from "axios";
import WeatherForecastInfo from "./WeatherForecastInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [loaded, setLoaded]=useState(false);
    const [forecast, setForecast]=useState (null);

function handleForecast(response){
     setForecast(response.data);
    setLoaded(true);
   
}
if (loaded && props.city ===forecast.city.name){

return <div className="weatherForecast">

<div className="container">
  <div className="row">
    <div className="col-2">
      <WeatherForecastInfo data={forecast.list[0]}/>
    </div>
    <div className="col-2">
       <WeatherForecastInfo data={forecast.list[1]}/>
    </div>
    <div className="col-2">
    <WeatherForecastInfo data={forecast.list[2]}/>
    </div>
        <div className="col-2">
          <WeatherForecastInfo data={forecast.list[3]}/>
    </div>
        <div className="col-2">
        <WeatherForecastInfo data={forecast.list[4]}/>
    </div>
  </div>

         
      
      
  
   
</div>
</div>

} else {
    let apiKey = "545996832190a3bc0bc230c58243bdec";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecast);
    return null;
    }
}