//授權碼:
//CWB-A87FDCAE-20FE-4749-AA6E-2694AF905829
import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
//import { css } from "@emotion/core";

//載入圖示
import { ReactComponent as CloudyIcon } from "./images/day-cloudy.svg";
import { ReactComponent as AirflowIcon } from "./images/airFlow.svg";
import { ReactComponent as RainIcon } from "./images/rain.svg";
import { ReactComponent as RefrIcon } from "./images/refresh.svg";

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
//Container 後面背景
const WeatherCard = styled.div`
  position: relative;
  min-width: 400px;
  box-shadow: 0 1px 3px 0 #999;
  background-color: #f9f9f9;
  padding: 15px 15px;
`; //顯示畫面
const Location = styled.div`
  ${(props) => console.log(props)}
  font-size: 28px;
  color: ${(props) => (props.theme === "dark" ? "#dadada00" : "#212121")};
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 16px;
  color: #828282;
  margin-bottom: 30px;
`;
const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  color: #fff;
`;
const Temperature = styled.div`
  color: #757575;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;
const Toc = styled.div`
  font-weight: normal;
  font-size: 42px;
`;
const Airflow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;
  svg {
    width: 25px;
    height: auto;
    margin-right: 10px;
  }
`;
const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  svg {
    width: 25px;
    height: auto;
    margin-right: 10px;
  }
`;
const Refresh = styled.div`
  position: absolute;
  right: 15px;
  bottom: 10px;
  font-size: 14px;
  color: #757575;
  svg {
    width: 12px;
    height: auto;
    margin-right: 5px;
  }
`;
//在共用樣式的函式中，一樣可以透過 props 取得外部傳來的資料
//改顏色
/*const buttonDefault = (props) => css`
  display: block;
  width: 120px;
  height: 30px;
  font-size: 14px;
  background-color: transparent;
  color: ${props.theme === 'dark' ? '#dadada' : '#212121'};
`;*/

//--新資料--
/*
const WeatherApp = () => {
  const [currentWeather, setCurrentWeather] = useState({
    observationTime: "2022-10-03 22:10:00",
    locationName: "屏東縣",
    description: "多雲時晴",
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.88,
  });
};
return (
  <Container>
    <WeatherCard>
      <Location>{currentWeather.locationName}</Location>
      <Description>
        {currentWeather.observationTime}
        {""}
        {currentWeather.description}
      </Description>
      <CurrentWeather>
        <Temperature>
          {currentWeather.temperature} <Celsius>°C</Celsius>
        </Temperature>
        <Cloudy />
      </CurrentWeather>
      <AirFlow>
        <AirFlowIcon />
        {currentWeather.windSpeed} m/h
      </AirFlow>
      <Rain>
        <RainIcon />
        {currentWeather.humid * 100} %
      </Rain>
      <Redo />
    </WeatherCard>
  </Container>
);
*/
/*寫死資料
const WeatherApp = () => {
  return (
    <Container>
      <WeatherCard>
        <h1>Weather</h1>
        <Location theme="dark">屏東縣</Location>
        <Description>晴時多雲</Description>
        <CurrentWeather>
          <Temperature>
            23
            <Toc>℃</Toc>
          </Temperature>
          <CloudyIcon />
        </CurrentWeather>
        <Airflow>
          <AirflowIcon /> 23 m/h{" "}
        </Airflow>
        <Rain>
          <RainIcon /> 50 %
        </Rain>
        <Refresh>
          <RefrIcon /> 最後觀測時間:下午 04:00{" "}
        </Refresh>
      </WeatherCard>
    </Container>
  );
};
*/
const WeatherApp = () => {
  const [currentWeather] = useState({
    observationTime: "2022-10-03 22:10:00",
    locationName: "屏東縣",
    description: "多雲時晴",
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.88,
  });
  const handleClick = () => {
    fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-A87FDCAE-20FE-4749-AA6E-2694AF905829&limit=5"
    );
  };

  return (
    <Container>
      <WeatherCard>
        <h1>Weather</h1>
        <Location>{currentWeather.locationName}</Location>
        <Description>{currentWeather.description}</Description>
        <CurrentWeather>
          <Temperature>
            {currentWeather.temperature}
            <Toc>℃</Toc>
          </Temperature>
          <CloudyIcon />
        </CurrentWeather>
        <Airflow>
          <AirflowIcon /> {currentWeather.windSpeed} m/h{" "}
        </Airflow>
        <Rain>
          <RainIcon /> {currentWeather.humid * 100} %
        </Rain>
        <Refresh>
          <RefrIcon /> 最後觀測時間:{currentWeather.observationTime}{" "}
        </Refresh>
      </WeatherCard>
    </Container>
  );
};
export default WeatherApp;
