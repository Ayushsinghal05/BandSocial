import React, { useMemo} from "react";
import { Text } from "react-native";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  console.log('=======>', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBKeXQqFHz-K_vrpf_pXpgbQAM8y0w8GrY",
  });

  if (!isLoaded) return <Text>Loading...</Text>;
  return <Map/>;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container" >
      <Marker position={center}  />
    </GoogleMap>
  );
}