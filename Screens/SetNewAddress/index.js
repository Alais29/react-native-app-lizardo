import { GOOGLE_API_KEY } from '@env';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, useTheme } from 'react-native-paper';

import ScreenContainer from '../../Components/ScreenContainer';
import { getInitialRegion } from '../../utils/getMapInitialLocation';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const SetNewAddressScreen = () => {
  const [initialRegion, setInitialRegion] = useState({});
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState({});

  const { colors } = useTheme();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      console.log('map location', location);

      const mapInitialRegion = getInitialRegion(
        location.coords.latitude,
        location.coords.longitude,
        location.coords.accuracy,
      );

      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setInitialRegion(mapInitialRegion);
    })();
  }, []);

  useEffect(() => {
    if (location.lat) {
      formatLocation();
    }
  }, [location]);

  const handleLocation = async event => {
    setLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const formatLocation = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`,
    );
    const reverseGeocode = await response.json();
    const formattedAddress = reverseGeocode.results[0].formatted_address;
    setAddress({ ...address, address: formattedAddress });
  };

  return (
    <ScreenContainer>
      {!isEmpty(initialRegion) ? (
        <>
          <MapView
            initialRegion={initialRegion}
            style={{
              width: Dimensions.get('screen').width,
              height: Dimensions.get('screen').height * 0.5,
            }}
            onPress={handleLocation}
          >
            {location.lat ? (
              <Marker
                title="Ubicación seleccionada"
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
              />
            ) : null}
          </MapView>
          <Text>{address?.address}</Text>
        </>
      ) : (
        <ActivityIndicator animating color={colors.surface} />
      )}
      {/* <Button title="Confirmar ubicación" onPress={handleConfirm} /> */}
    </ScreenContainer>
  );
};

export default SetNewAddressScreen;
