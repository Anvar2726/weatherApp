import "./style.scss"; // Assuming you have a style file for the WeatherInfo component

const WeatherInfo = (data) => {
  if (!data) return null;
  const { location, current } = data;

  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <h2>
          {location?.name}, {location?.country}
        </h2>
        <p>{location?.localtime}</p>
      </div>

      <div className="weather-card__main">
        <div className="weather-card__temp">
          <img src={current?.condition.icon} alt={current?.condition.text} />
          <h1>{current?.temp_c}°C</h1>
          <p>{current?.condition.text}</p>
        </div>

        <div className="weather-card__details">
          <p>
            <strong>Feels Like:</strong> {current?.feelslike_c}°C
          </p>
          <p>
            <strong>Humidity:</strong> {current?.humidity}%
          </p>
          <p>
            <strong>Wind:</strong> {current?.wind_kph} kph {current?.wind_dir}
          </p>
          <p>
            <strong>Pressure:</strong> {current?.pressure_mb} mb
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
