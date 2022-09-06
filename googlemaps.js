import React, {useMemo} from 'react';
import {View,Text} from 'react-native';
// import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function Home() {
  console.log('=======>', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  // const {isLoaded} = useLoadScript({
  //googleMapsApiKey: 'AIzaSyBKeXQqFHz-K_vrpf_pXpgbQAM8y0w8GrY',
  // });

  return <Map />;
}

function Map() {
  const center = useMemo(() => ({lat: 44, lng: -80}), []);

  return (
    // <GoogleMap
    //   zoom={10}
    //   center={{lat: 44, lng: -80}}
    //   mapContainerClassName="map-container">
    //   <Marker position={{lat: 44, lng: -80}} />
    // </GoogleMap>

    <View>    
      <MapView
      provider={MapView.PROVIDER_GOOGLE}

      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      </MapView>
    </View>
  );
}