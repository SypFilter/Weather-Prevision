import { Container, SearchSection, FildDiv, Fild, Button } from "./styled";
import { useState } from "react";
import Header from "../Header/index";

export default function BodyStyle() {
  const [value, setValue] = useState("");
  const [weatherData, SetWeatherData] = useState("");

  const informations = {
    methods: "GET",
    headers: {
      "X-RapidAPI-Key": "7b77c9deed1b4a17937192541230602",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  function fetchWeather() {
    if (value === "") {
      alert("Put the correct place!");
      return;
    }

    fetch(
      `http://api.weatherapi.com/v1/current.json?key=7b77c9deed1b4a17937192541230602&q=${value}&aqi=yes`,
      informations
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Place don't exist");
        }
        return response.json();
      })
      .then((data) => {
        SetWeatherData(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Place don't exist");
      });
  }

  return (
    <Container>
      <Header />
      <SearchSection>
        <span className="search-text">Search Here</span>
        <FildDiv>
          <Fild
            onBlur={(e) => setValue(e.target.value)}
            placeholder="The place you want here!"
          />
        </FildDiv>
        <Button onClick={() => fetchWeather()}>🔍</Button>
      </SearchSection>
      <div className="dates-wrapper">
        {weatherData.location && (
          <div className="dates-wrapper">
            <p className="city">City: {weatherData.location.name}</p>
            <div className="display-fix">
              <div className="img-position">
                <img
                  src={weatherData.current.condition.icon}
                  alt="Weather condition"
                />
                <p className="temperature">{weatherData.current.temp_c}°C</p>
              </div>
            </div>
            <div className="float">
              <p className="condition">{weatherData.current.condition.text}</p>
              <p className="humidity">
                Humidity: {weatherData.current.humidity}%
              </p>
              <p className="wind">Wind: {weatherData.current.wind_kph} km/h</p>
              <p className="pressure">
                Pressure: {weatherData.current.pressure_mb} mb
              </p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
