import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import Button from '../../Components/Button';
import ErrorMessage from '../../Components/ErrorMessage';
import List from '../../Components/List';
import CartItem from '../../Components/List/CartItem';
import ScreenContainer from '../../Components/ScreenContainer';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const CartScreen = () => {
  const { products } = useSelector(state => state.cart);

  const { colors } = useTheme();

  const total = products.reduce((amount, item) => {
    return (amount += item.totalPrice);
  }, 0);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {isEmpty(products) ? (
          <ErrorMessage errorMessage="There are no products in the cart." />
        ) : (
          <>
            <List
              renderItem={({ item, index }) => (
                <CartItem
                  item={item}
                  isLastItem={index === products.length - 1}
                />
              )}
              data={products}
              showSearch={false}
            />
            <View
              style={{
                ...styles.finishOrder,
                backgroundColor: colors.background,
              }}
            >
              <Text style={{ ...styles.totalPrice, color: colors.header }}>
                Total: ${total}
              </Text>
              <Button color="surface">
                <Text>Finish Order</Text>
              </Button>
            </View>
          </>
        )}
      </View>
    </ScreenContainer>
  );
};

export default CartScreen;
