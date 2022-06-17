import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import {
  List as ListPaper,
  useTheme,
  Text,
  IconButton,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Components/Button';
import ErrorMessage from '../../Components/ErrorMessage';
import List from '../../Components/List';
import ScreenContainer from '../../Components/ScreenContainer';
import {
  getAddressesAsync,
  removeAddress,
  removeAddressAsync,
  selectAddress,
} from '../../Features/addresses/addressesSlice';
import { Status } from '../../Features/interfaces';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const AddressScreen = ({ navigation }) => {
  const { addresses, selectedAddress, status, error } = useSelector(
    state => state.addresses,
  );
  const { user } = useSelector(state => state.auth);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.idle) {
      dispatch(getAddressesAsync(user.userID));
    }
  }, []);

  const handleSelect = item => {
    dispatch(selectAddress(item));
  };

  const handleDeleteAddress = adressId => {
    dispatch(removeAddressAsync(adressId));
    dispatch(removeAddress(adressId));
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={{ ...styles.title, color: colors.header }}>
          Select an address or create a new one
        </Text>
        {status === Status.success && isEmpty(addresses) ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginBottom: 30,
              width: Dimensions.get('screen').width * 0.9,
            }}
          >
            <ErrorMessage errorMessage="There are no saved addresses, please create a new one" />
          </View>
        ) : null}

        {status === Status.success && !isEmpty(addresses) ? (
          <List
            data={addresses}
            showSearch={false}
            renderItem={({ item, index }) => (
              <ListPaper.Item
                title={item.name}
                description={item.address}
                left={props => (
                  <ListPaper.Icon
                    {...props}
                    icon="map-marker-outline"
                    color={colors.header}
                  />
                )}
                right={props => (
                  <IconButton
                    {...props}
                    icon="delete"
                    color={colors.header}
                    size={20}
                    onPress={() => handleDeleteAddress(item.id)}
                    style={{ marginTop: 10 }}
                  />
                )}
                titleStyle={{ color: colors.header, fontFamily: 'Acme' }}
                descriptionStyle={{ color: colors.header }}
                onPress={() => handleSelect(item)}
                style={{
                  ...styles.item,
                  marginBottom: addresses.length - 1 === index ? 55 : 0,
                  borderColor:
                    selectedAddress.id === item.id
                      ? colors.surface
                      : colors.background,
                }}
              />
            )}
          />
        ) : null}

        {status === Status.failed ? (
          <ErrorMessage errorMessage={error} showTryLaterMsg />
        ) : null}

        <View
          style={{ ...styles.newAdress, backgroundColor: colors.background }}
        >
          <Button
            color="surface"
            onPress={() => navigation.navigate('SetNewAddress')}
          >
            <Text style={{ fontFamily: 'Acme' }}>Create Address</Text>
          </Button>
          <Button
            color="surface"
            disabled={Object.values(selectedAddress).length === 0}
            onPress={() => navigation.navigate('CartSummary')}
          >
            <Text style={{ fontFamily: 'Acme' }}>Continue</Text>
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default AddressScreen;
