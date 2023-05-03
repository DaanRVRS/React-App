import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search a city..."
          className="text-xl font-light p-2 fow-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="1x"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          size="1x"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
