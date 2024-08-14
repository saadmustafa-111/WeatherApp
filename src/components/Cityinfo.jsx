import React, { useState } from "react";

export default function Cityinfo({ onsearch }) {
  const [city, setCity] = useState("");
  const handlechange = (e) => {
    setCity(e.target.value);
  };
  const handleSearch = () => {
    onsearch(city);
  };
  return (
    <div className=" p-4 flex md:items-center md:justify-center">
      <input
        type="text"
        placeholder="search a city"
        value={city}
        onChange={handlechange}
        className="ml-2  border rounded-md"
      />
      <button
        onClick={handleSearch}
        className="text-white bg-slate-950 p-2 rounded-lg m-3"
      >
        Get Weather
      </button>
    </div>
  );
}
