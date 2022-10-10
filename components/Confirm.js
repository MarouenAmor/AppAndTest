import React, { useContext } from "react";
import { ethers } from "ethers";
import RideSelector from "./RideSelector";
import { UberContext } from "../context/uberContext";

function Confirm() {
  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(UberContext);

  const storeTripDetails = async (pickup, dropoff) => {
    try {
      await fetch("/api/db/saveTrips", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          service: selectedRide.service,
        }),
      });

      console.log("reuested :", process.env.UBER_ADDRESS);

      await metamask.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: "0x5451FD07C67eb77009C1F4c8B49f667F774827ab",
            gas: "0x7EF40", // 520000 Gwei
            value: ethers.utils.parseEther(price)._hex,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-between flex-1 h-full">
      <div className="flex flex-col h-full overflow-scroll">
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className="z-10 border-t-2 cursor-pointer">
        <div
          className="py-4 m-4 text-xl text-center text-white bg-black"
          onClick={() => storeTripDetails(pickup, dropoff)}
        >
          Confirm {selectedRide.service || "Uberx"}
        </div>
      </div>
    </div>
  );
}

export default Confirm;
