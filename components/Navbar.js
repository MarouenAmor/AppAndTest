import React, { useContext } from "react";
import { BsPerson } from "react-icons/bs";
import Image from "next/image";
import avatart from "../temp/userAvatar.jpg";
import { UberContext } from "../context/uberContext";

function Navbar() {
  // const currentAccount = "0x1748862074AB2F3f84e28a42c021C39471d0F49B";
  const { currentAccount, connectWallet, currentUser } =
    useContext(UberContext);
  console.log("curentuser", currentUser);

  return (
    <div className="flex items-center w-full h-16 px-10 text-white bg-black md:justify-around">
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold text-white ">Uber</div>
        <div className="flex items-center mx-4 font-mono text-lg cursor-pointer">
          Ride
        </div>
        <div className="flex items-center mx-4 font-mono text-lg cursor-pointer">
          Drive
        </div>
        <div className="flex items-center mx-4 font-mono text-lg cursor-pointer">
          More
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center mx-4 font-mono text-lg cursor-pointer">
          Help
        </div>
        {currentUser && (
          <div className="flex items-center mx-4 font-serif text-2xl cursor-pointer">
            {currentUser || "User Name"}
          </div>
        )}

        {currentAccount ? (
          <div className="flex items-center gap-3">
            <div className="object-cover w-10 h-10 p-px rounded-full cursor-pointer">
              <Image
                className=""
                src={avatart}
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
            {currentAccount}
          </div>
        ) : (
          <div
            className="flex items-center gap-3"
            onClick={() => connectWallet()}
          >
            <BsPerson className="w-8 h-8" />
            Log In
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
