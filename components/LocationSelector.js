import React, { useState, useContext } from "react";
import { UberContext } from "../context/uberContext";

function LocationSelector() {
  const [inFocus, setInfocus] = useState("from");
  const { dropoff, pickup, setDropoff, setPickup } = useContext(UberContext);

  return (
    <div className="pt-2">
      <div className="ml-4 text-2xl font-bold">
        {inFocus === "from" ? "where can we pick u up" : " where to?"}
      </div>
      <div className="relative flex flex-col mb-4">
        <div
          className={`h-10 mx-4 border-2  bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "from" && "border-black"
          }`}
        >
          <div>
            <svg viewBox="0 0 24 24" width="1rem" height="1rem">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className="w-full h-full p-2 my-2 bg-transparent border-none outline-none rounded-2"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            onFocus={() => setInfocus("from")}
          />
        </div>
        <div className="w-0 h-[2rem]  border-black border absolute z-10 left-[2rem] top-[2rem]"></div>
        <div
          className={`h-10 mx-4 border-2  bg-[#eeeeee] flex items-center my-1 py-1 px-2 ${
            inFocus === "to" && "border-black"
          }`}
        >
          <div>
            <svg viewBox="0 0 24 24" width="1rem" height="1rem">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <input
            className="w-full h-full p-2 my-2 bg-transparent border-none outline-none rounded-2"
            placeholder="Enter dropoff  location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            onFocus={() => setInfocus("to")}
          />
        </div>
      </div>
    </div>
  );
}

export default LocationSelector;
