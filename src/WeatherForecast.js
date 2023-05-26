import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&appid={apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (loaded) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]}/>
        </div> 
      </div>
    </div>
  ); 
} else {
 load();

  return null;
}
}