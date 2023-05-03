import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

// api key 965468b797048978ad866ff2577ab5d2
// test key https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=965468b797048978ad866ff2577ab5d2
// https://youtu.be/cWk5EKVxrgo?t=5900
function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />

        {weather && (
          <div>
            <TimeAndLocation />
            <TemperatureAndDetails />

            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
