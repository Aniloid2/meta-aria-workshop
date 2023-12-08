import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37.484466761008306,
  lng: -122.14808059580814,
};

// Dummy data for shops
const locations = [
  { lat: 37.479564302586496, lng: -122.18704891759779 },
  { lat: 37.46143486137802, lng: -122.13693719652974 },
  { lat: 37.45327349485644, lng: -122.1801859071699 },
  { lat: 37.476566328931945, lng: -122.20610151044627 },
  // Add more locations here
];

function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
