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

const CartScreen = ({ navigation }) => {
  const { products, total } = useSelector(state => state.cart);

  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {isEmpty(products) ? (
          <ErrorMessage errorMessage="There are no products in the cart." />
        ) : (
          <>
            <List
              data={products}
              showSearch={false}
              renderItem={({ item, index }) => (
                <CartItem
                  item={item}
                  isLastItem={index === products.length - 1}
                />
              )}
            />
            <View
              style={{
                ...styles.continueOrder,
                backgroundColor: colors.background,
              }}
            >
              <Text style={{ ...styles.totalPrice, color: colors.header }}>
                Total: ${total}
              </Text>
              <Button
                color="surface"
                onPress={() => navigation.navigate('Addresses')}
              >
                <Text>Proceed to purchase</Text>
              </Button>
            </View>
          </>
        )}
      </View>
    </ScreenContainer>
  );
};

export default CartScreen;
