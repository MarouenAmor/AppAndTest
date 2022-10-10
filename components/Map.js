import mapboxgl from "mapbox-gl";
import React, { useEffect, useContext } from "react";
import { UberContext } from "../context/uberContext";

function Map() {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);
  console.log("pcikup:", pickupCoordinates, " dropoff:", dropoffCoordinates);
  mapboxgl.accessToken =
    "pk.eyJ1IjoibW9oYW1tZWRpbXRpeWF6IiwiYSI6ImNsNDJtd3BrZDAxb2Qza25scHZkMG1oZTEifQ.nEB--0xJcJo3B4_ydooF2A";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], { padding: 60 });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className="flex-1 w-full h-full" id="map"></div>;
}

export default Map;
