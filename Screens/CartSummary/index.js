import React from 'react';
import { ScrollView, View } from 'react-native';
import {
  Surface,
  Text,
  Divider,
  useTheme,
  ActivityIndicator,
} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Components/Button';
import SummaryItem from '../../Components/List/SummaryItem';
import ScreenContainer from '../../Components/ScreenContainer';
import { emptyCart } from '../../Features/cart/cartSlice';
import { Status } from '../../Features/interfaces';
import {
  createOrderAsync,
  getOrdersAsync,
} from '../../Features/orders/ordersSlice';
import { styles } from './styles';

const CartSummary = ({ navigation }) => {
  const { products, total } = useSelector(state => state.cart);
  const { selectedAddress } = useSelector(state => state.addresses);
  const { user } = useSelector(state => state.auth);
  const { status, error } = useSelector(state => state.orders);

  const { colors } = useTheme();

  const dispatch = useDispatch();

  const handleCreateOrder = async () => {
    try {
      const order = {
        date: new Date().toLocaleString('es-CL'),
        products,
        total,
        user: user.email,
        userid: user.userID,
        deliveryAddress: selectedAddress,
      };
      await dispatch(createOrderAsync({ order, userid: user.userID })).unwrap();
      await dispatch(getOrdersAsync(user.userID)).unwrap();
      dispatch(emptyCart());
      navigation.navigate('OrderSuccessful');
    } catch (e) {
      console.log(e);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
      });
    }
  };

  return (
    <ScreenContainer>
      <ScrollView style={styles.container}>
        <Surface style={styles.summaryCard}>
          <Text style={styles.title}>Products</Text>
          <Divider style={{ backgroundColor: colors.text }} />
          <View>
            {products.map(item => (
              <SummaryItem item={item} key={item.id} />
            ))}
          </View>
          <Divider style={{ backgroundColor: colors.text }} />
          <Text style={styles.total}>Total: ${total}</Text>
        </Surface>
        <Surface style={styles.summaryCard}>
          <Text style={styles.title}>Delivery Address</Text>
          <Divider style={{ backgroundColor: colors.text }} />
          <Text>{selectedAddress.address}</Text>
        </Surface>
      </ScrollView>
      <View style={styles.finishOrder}>
        <Button
          color="surface"
          onPress={handleCreateOrder}
          customBtnStyles={styles.finishOrderBtn}
          disabled={status === Status.loading || total === 0}
        >
          {status === Status.loading ? (
            <ActivityIndicator animating color={colors.text} />
          ) : (
            <Text style={{ fontFamily: 'Acme' }}>Finish Order</Text>
          )}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default CartSummary;
