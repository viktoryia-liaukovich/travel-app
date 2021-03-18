import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Weather.scss';

export default function Weather({ coordinates = [], city }) {
  const { locale, dict } = useSelector(state => state);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[1]}&lon=${coordinates[0]}&lang=${locale.substr(0, 2)}&appid=b230d199aa8e2ebca5c616c59bde9699&units=metric`,
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherData(result);
      });
  }, []);

  return (
    <div className="widget weather-widget">
      <h3 className="weather-widget__title">{dict.WEATHER} {city}</h3>
      {weatherData &&
        <div className="weather-widget__content">
          <i className={`weather-icon owf owf-${weatherData.weather && weatherData.weather[0].id} owf-3x`}></i>
          <p className="temperature">
            {dict.TEMPERATURE}: {weatherData.main && weatherData.main.temp.toFixed(0)}°C
          </p>
          <p className="weather-description">{dict.WEATHER_TYPE}: {weatherData.weather && weatherData.weather[0].description}</p>
          <p className="speed-wind">
            {dict.WIND_SPEED}: {weatherData.wind && weatherData.wind.speed} {dict.WIND_SPEED_VAL}
          </p>
          <p className="air-humidity">{dict.HUMIDITY}: {weatherData.main && weatherData.main.humidity}% </p>
        </div>
      }
    </div>
  );
}
