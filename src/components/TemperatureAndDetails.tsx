import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faWind,
  faSun,
  faMountainSun,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="test image"
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        {/* real feel */}
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              size="xs"
              className="mr-1"
            />
            Real Feel
            <span className="font-medium ml-1">32°</span>
          </div>
          {/* humidity */}
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon icon={faDroplet} size="xs" className="mr-1" />
            Humidity
            <span className="font-medium ml-1">65%</span>
          </div>
          {/* wind speed */}
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon icon={faWind} size="xs" className="mr-1" />
            Wind
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FontAwesomeIcon icon={faSun} />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <FontAwesomeIcon icon={faMountainSun} />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:35 PM</span>
        </p>
        <p className="font-light">|</p>
        <FontAwesomeIcon icon={faTemperatureArrowUp} />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        <FontAwesomeIcon icon={faTemperatureArrowDown} />
        <p className="font-light">
          Low: <span className="font-medium ml-1">40°</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
