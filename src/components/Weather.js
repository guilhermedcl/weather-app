import React, { useState } from 'react';
import { getWeatherData } from '../Api';
import '../App.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Cidade não encontrada. Por favor, verifique o nome da cidade.');
    }
  };

  return (
    <div className="WeatherContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="SearchInput"/>
        <button type="submit" className="SearchButton">Buscar</button> 
      </form>
      {weatherData && (
        <div>
          <img className="WeatherIcon" src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p className="WeatherTextDesc">{weatherData.weather[0].description}</p>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className="WeatherTextTemp">{weatherData.main.temp} °C</p>
          <p className="WeatherText">Umidade: {weatherData.main.humidity}%</p>
          <p className="WeatherText">Velocidade do Vento: {weatherData.wind.speed} m/s</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
