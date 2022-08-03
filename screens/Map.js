import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapPick() {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandeler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandeler}
    >
      {selectedLocation && (<Marker
      title="picked location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />)}
    </MapView>
  );
}

export default MapPick;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
