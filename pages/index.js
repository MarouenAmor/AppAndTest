import Head from "next/head";
import Image from "next/image";
import Confirm from "../components/Confirm";
import LocationSelector from "../components/LocationSelector";
import Map from "../components/Map";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className="h-full w-screen flex-1 z-10">
        <Map />
      </div>
      <div className="h-full w-[400px] ml-[1rem] py-[3rem] z-20 absolute top-0 left-0 flex flex-col justify-end">
        <div className="h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll">
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
