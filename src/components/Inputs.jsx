import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

export default function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location Fetched");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsClick = (e) => {
    const seletedUnit = e.currentTarget.name;
    if (units !== seletedUnit) {
      setUnits(seletedUnit);
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          type="text"
          placeholder="search a city.."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:first-letter:capitalize"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 justify-center items-center"></div>
      <button
        name="metric"
        className={`text-xl text-white font-medium ${
          units === "metric" ? "font-semibold" : "font-light"
        } transition ease-out hover:scale-125`}
        onClick={handleUnitsClick}
      >
        °C
      </button>
      <p className="text-xl text-white mx-1 pt-2 ">|</p>
      <button
        name="imperial"
        className={`text-xl text-white font-medium ${
          units === "imperial" ? "font-semibold" : "font-light"
        } transition ease-out hover:scale-125`}
        onClick={handleUnitsClick}
      >
        °F
      </button>
    </div>
  );
}
