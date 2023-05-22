import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
    });

  }
  if (weatherData.ready) {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success"/>
            </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li><FormattedDate date={weatherData.date}/></li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
        <img 
          src={weatherData.iconUrl}
          alt={weatherData.description}
          className="float-left"/>
        <div className="float-left">
          <span className="temperature">{Math.round(weatherData.temperature)}<span className="degree">°</span></span>
          <span className="unit">C</span>
        </div>
          </div>
        </div>
        <div className="col-6 ">
          <ul className="conditions">
            
            <li>Humidity: {weatherData.humidity} %</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
  } else {
    const apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}