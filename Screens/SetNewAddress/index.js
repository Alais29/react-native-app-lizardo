import { GOOGLE_API_KEY } from '@env';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {
  ActivityIndicator,
  useTheme,
  Text,
  TextInput,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Components/Button';
import ErrorMessage from '../../Components/ErrorMessage';
import ScreenContainer from '../../Components/ScreenContainer';
import {
  addAddress,
  addAddressAsync,
  selectAddress,
} from '../../Features/addresses/addressesSlice';
import { getInitialRegion } from '../../utils/getMapInitialLocation';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const SetNewAddressScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [initialRegion, setInitialRegion] = useState({});
  const [location, setLocation] = useState({ lat: '', lng: '' });
  const [errorMsg, setErrorMsg] = useState(null);

  const { user } = useSelector(state => state.auth);

  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});

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
    setAddress(formattedAddress);
  };

  const handleSaveAddress = () => {
    const newAddress = {
      id: Date.now(),
      userid: user.userID,
      name,
      address,
    };
    dispatch(addAddressAsync(newAddress));
    dispatch(addAddress(newAddress));
    dispatch(selectAddress(newAddress));
    navigation.navigate('Addresses');
  };

  return (
    <ScreenContainer>
      <View
        style={{
          ...styles.container,
          justifyContent: isEmpty(initialRegion) ? 'center' : 'flex-start',
        }}
      >
        {errorMsg ? (
          <ErrorMessage errorMessage={errorMsg} />
        ) : !isEmpty(initialRegion) ? (
          <View>
            <View>
              <TextInput
                label="Set a name for the address"
                onChangeText={setName}
                value={name}
                dense
                theme={{ colors: { text: colors.header } }}
              />
            </View>
            <MapView
              initialRegion={initialRegion}
              style={{
                width: Dimensions.get('screen').width,
                height: Dimensions.get('screen').height * 0.45,
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
            <Text style={{ ...styles.address, color: colors.header }}>
              {address}
            </Text>
          </View>
        ) : (
          <ActivityIndicator animating color={colors.surface} />
        )}
        <View
          style={{ ...styles.saveAddress, backgroundColor: colors.background }}
        >
          <Button
            color="surface"
            onPress={handleSaveAddress}
            customBtnStyles={styles.btn}
            disabled={!name}
          >
            <Text>Save address</Text>
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SetNewAddressScreen;
