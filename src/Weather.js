import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon
    });

  }

function handleSubmit(event) {
  event.preventDefault();
  
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function search() {
  const apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

  if (weatherData.ready) {
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success"/>
            </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>

    </div>
  );
  } else {
    search();
    return "Loading...";
  }
}