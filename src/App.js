//import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import styled from "@emotion/styled";

function App() {
  return (
    <Container>
      <WeatherCard>
        <h1>Weather</h1>
        <Location>屏東縣</Location>
        <Description>晴時多雲</Description>
        <CurrentWeather>
          <Temperature>
            23
            <Toc>℃</Toc>
            <WeatherIcon></WeatherIcon>
          </Temperature>
        </CurrentWeather>
        <Airflow>
          <AirFlowIcon /> 25 m/h
        </Airflow>
      </WeatherCard>
    </Container>
  );
}

export default App;
