import { StackActions, useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { BackHandler, View } from 'react-native';
import { Surface, Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import ScreenContainer from '../../Components/ScreenContainer';
import { styles } from './styles';

const OrderSuccessful = ({ navigation }) => {
  const { orders } = useSelector(state => state.orders);
  const { user } = useSelector(state => state.auth);

  const lastOrder = orders[orders.length - 1];

  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.dispatch(StackActions.popToTop());
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={{ ...styles.card, backgroundColor: colors.accent }}>
          <Text style={styles.title}>
            Thanks for your purchase {user.displayName}!
          </Text>
        </View>
        <Surface style={styles.card}>
          <View style={styles.orderInfo}>
            <Text style={styles.infoTextTitle}>Order Id</Text>
            <Text style={styles.infoText}>{lastOrder.id}</Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.infoTextTitle}>Email</Text>
            <Text style={styles.infoText}>{user.email}</Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.infoTextTitle}>Address</Text>
            <Text style={styles.infoText}>
              {lastOrder.deliveryAddress.address}
            </Text>
          </View>
          <View style={styles.orderInfo}>
            <Text style={styles.infoTextTitle}>Total</Text>
            <Text style={styles.infoText}>${lastOrder.total}</Text>
          </View>
        </Surface>
      </View>
    </ScreenContainer>
  );
};

export default OrderSuccessful;
