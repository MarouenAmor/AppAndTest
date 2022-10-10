import React, { useContext, useEffect, useState } from "react";
import { UberContext } from "../context/uberContext";
import Image from "next/image";
import ethLogo from "../assets/eth-logo.png";

const basePrice = "1234";

const RideSelector = () => {
  const [carList, setCarList] = useState([]);
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext);
  console.log("seleted ride", selectedRide);
  useEffect(() => {
    (async () => {
      try {
        const rideTypes = await fetch("/api/db/getRideTypes");
        const res = await rideTypes.json();
        setCarList(res.data);
        setSelectedRide(res.data[0]);
      } catch (e) {
        console.log("error : ", e);
      }
    })();
  }, []);
  return (
    <>
      <div className="py-2 font-semibold text-center text-gray-500 ">
        Choose a ride, or swipe up for more
      </div>
      <hr />
      <div className="mx-2 ">
        {carList?.length > 0 &&
          carList.map((car, i) => (
            <div
              key={i}
              className={`flex items-center justify-between py-2 my-2 cursor-pointer  ${
                car.service === selectedRide.service
                  ? "border-4 border-black"
                  : ""
              }`}
              onClick={() => {
                setSelectedRide(car);
                setPrice(
                  ((basePrice / 10 ** 8) * car.priceMultiplier).toFixed(5)
                );
              }}
            >
              <div className="flex items-center gap-3">
                <Image src={car.url} width="50" height="50" alt={car.service} />
                <div>
                  <div className="font-bold text">{car.service}</div>
                  <div className="text-blue-400">5 min away</div>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  {((basePrice / 10 ** 8) * car.priceMultiplier).toFixed(5)}
                </div>
                <div>
                  <Image src={ethLogo} height="30" width={30} alt="eth_logo" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RideSelector;
