import React from "react";
import { getFormattedTime } from "../../../utils";

import sunriseImg from "../../../assets/images/sunrise.png";
import sunsetImg from "../../../assets/images/sunset.png";
import moonriseImg from "../../../assets/images/moonrise.png";
import moonsetImg from "../../../assets/images/moonset.png";
import summer from "../../../assets/images/summer.png";
import cold from "../../../assets/images/cold.png";

import "./style.scss";

const ForecastCard = (forecasts) => {
  const date = forecasts.date;
  const maxTemp = forecasts.day.maxtemp_c;
  const minTemp = forecasts.day.mintemp_c;
  const weather = forecasts.day.condition.text;
  const weatherImg = forecasts.day.condition.icon;
  const sunrise = forecasts.astro.sunrise;
  const sunset = forecasts.astro.sunset;
  const moonrise = forecasts.astro.moonrise;
  const moonset = forecasts.astro.moonset;
  const moonPhase = forecasts.astro.moon_phase;

  return (
    <div className="forecast-card">
      <p className="forecast-day">
        <strong>{getFormattedTime(date)}</strong>
      </p>
      <div className="temp-info">
        <p>
          <img width="30" src={summer} alt="max temp" />
          Max temp: {maxTemp}
        </p>
        <p>
        <img width="30" src={cold} alt="min temp" />
          Min temp: {minTemp}</p>
      </div>
      <div className="weather-info">
        <p>{weather}</p>
        <img src={weatherImg} alt={weather} />
      </div>
      <div className="sun-info">
        <p>
          <img width="30" src={sunriseImg} alt="sunrise" />
          Sunrise: {sunrise}
        </p>
        <p>
          <img width="30" src={sunsetImg} alt="sunset" />
          Sunset: {sunset}
        </p>
      </div>
      <div className="moon-info">
        <p>
          Moon phase: <strong>{moonPhase}</strong>
        </p>
        <p>
          <img width="30" src={moonriseImg} alt="moonrise" />
          Moonrise: {moonrise}
        </p>

        <p>
          <img width="30" src={moonsetImg} alt="moonset" />
          Moonset: {moonset}
        </p>
      </div>
    </div>

    // <div>
    //   <p>
    //     Day: <strong>{getFormattedTime(date)}</strong>
    //   </p>
    //   <div>
    //     <p>Max temp: {maxTemp}</p>
    //     <p>Min temp: {minTemp}</p>
    //   </div>
    //   <div>
    //     <p>{weather}</p>
    //     <img src={weatherImg} alt={weather} />
    //   </div>
    //   <div>
    //     <p>Sunrise: {sunrise}</p>
    //     <p>Sunset: {sunset}</p>
    //   </div>
    //   <div>
    //     <p>
    //       Moon phase: <strong>{moonPhase}</strong>
    //     </p>
    //     <p>Moonrise: {moonrise}</p>
    //     <p>Moonset: {moonset}</p>
    //   </div>
    // </div>
  );
};

export default ForecastCard;
