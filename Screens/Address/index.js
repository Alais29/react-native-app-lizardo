import React from 'react';
import { View } from 'react-native';
import { List as ListPaper, useTheme, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Components/Button';
import List from '../../Components/List';
import ScreenContainer from '../../Components/ScreenContainer';
import { selectAddress } from '../../Features/addresses/addressesSlice';
import { styles } from './styles';

const AddressScreen = ({ navigation }) => {
  const { addresses, selectedAddress } = useSelector(state => state.addresses);
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const handleSelect = item => {
    dispatch(selectAddress(item));
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={{ ...styles.title, color: colors.header }}>
          Select an address or set a new one
        </Text>
        <List
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
              titleStyle={{ color: colors.header }}
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
          data={addresses}
          showSearch={false}
        />
        <View
          style={{ ...styles.newAdress, backgroundColor: colors.background }}
        >
          <Button
            color="surface"
            onPress={() => navigation.navigate('SetNewAddress')}
          >
            <Text>Set new Address</Text>
          </Button>
          <Button
            color="surface"
            disabled={Object.values(selectedAddress).length === 0}
            // onPress={navigation.navigate('SetAddress')}
          >
            <Text>Continue</Text>
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default AddressScreen;
