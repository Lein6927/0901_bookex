import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";
import WeatherApp from "./WeatherApp";
import "./style.css";
//----
function App() {
  return <WeatherApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
