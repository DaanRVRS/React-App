import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;

    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search a city..."
          className="text-xl font-light p-2 fow-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="1x"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          size="1x"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light hover:scale-125 transition ease-out"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
