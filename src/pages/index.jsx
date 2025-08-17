import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";
// import { useGeolocated } from "react-geolocated";


import WeatherInfo from "../components/card/weather-info";
import request from "../server";
import { API_KEY } from "../consts";
import ForecastCard from "../components/card/forecast";

import "swiper/css/pagination";
import "./style.scss";
const HomePage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [days, setDays] = useState(3);

  // const { coords } = useGeolocated({
  //   positionOptions: { enableHighAccuracy: true },
  //   userDecisionTimeout: 5000,
  // });

  // useEffect(() => {
  //   const getLocation = async () => {
  //     if (coords) {
  //       try {
  //         const { latitude, longitude } = coords;
  //         const { data: info } = await request(`/current.json?key=${API_KEY}&q=${latitude},${longitude}`);
  //         setData(info);
  //         setQuery(`${info.location.name}, ${info.location.country}`);
  //       } catch (error) {
  //         toast.error("Error fetching location data: " + error.message);
  //       }
  //     }
  //   }
  //   getLocation();
  // }, [coords, setData, setQuery]);

  

  const getForecasts = async (selectedDays = days) => {
    try {
      const params = { q: query, key: API_KEY, days: selectedDays };
      const {
        data: { forecast },
      } = await request(`forecast.json`, { params });
      setForecastData(forecast.forecastday);
    } catch (error) {
      toast.error("Error fetching forecast data: " + error.message, )
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data: info } = await request(`current.json?key=${API_KEY}&q=${query}`);
      setData(info);
      getForecasts();
    } catch (error) {
      toast.error("City not found, please try again. " + error.message,);
    }
  };

  const handleSelectDay = (e) => {
    const selectedDays = e.target.value;
    setDays(selectedDays);
    getForecasts(selectedDays);
  };

  return (
    <section className="home">
      <div className="home__wrapper container">
        <div className="home__container">
          <h1 className="home__title">Search Weather</h1>
          <form className="home__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="home__input"
              placeholder="Enter city or country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="home__button">
              Search
            </button>
          </form>
        </div>
        {data && Object.keys(data).length > 0 && <WeatherInfo {...data} />}
        <div className="home__forecast">
          <h2 className="home__forecast-title">Forecasts</h2>
          <select name="forecastday" id="forecastDaty" onChange={handleSelectDay}>
            <option value="3">3 Days</option>
            <option value="7">7 Days</option>
            <option value="10">10 Days</option>
            <option value="14">14 Days</option>
          </select>

          <div className="home__forecast-row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={
                {
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }
              }
            >
              {forecastData.map((forecast, index) => (
                <SwiperSlide key={index}>
                  {" "}
                  <ForecastCard {...forecast} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
