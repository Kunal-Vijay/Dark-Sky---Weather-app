import React from "react";
import { iconFromcode } from "../services/WeatherServices";

export default function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconFromcode(item.icon)} alt="" className="w-12 my-1" />
            <p className="font-medium">{item.temp.toFixed(1)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}
