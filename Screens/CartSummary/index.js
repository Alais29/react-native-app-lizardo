import React from 'react';
import { ScrollView, View } from 'react-native';
import { Surface, Text, Divider, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

import Button from '../../Components/Button';
import ScreenContainer from '../../Components/ScreenContainer';
import { styles } from './styles';

const CartSummary = () => {
  const { products } = useSelector(state => state.cart);

  const { colors } = useTheme();

  const total = products.reduce((amount, item) => {
    return (amount += item.totalPrice);
  }, 0);

  return (
    <ScreenContainer>
      <ScrollView style={styles.container}>
        <Surface style={styles.summaryCard}>
          <Text style={styles.title}>Products</Text>
          <Divider style={{ backgroundColor: colors.text }} />
          <View>
            {products.map(item => {
              const qty = Object.entries(item.quantities).reduce(
                (total, item) => {
                  return (total += item[1]);
                },
                0,
              );
              return (
                <View
                  style={{ ...styles.product, backgroundColor: colors.accent }}
                  key={item.id}
                >
                  <View style={styles.productTitleContainer}>
                    <Text style={styles.productTitle}>
                      {qty} {item.name}
                    </Text>
                    <Text style={styles.productTitle}>${item.totalPrice}</Text>
                  </View>
                  <View style={styles.quantities}>
                    {Object.entries(item.quantities).map(platform => (
                      <Text
                        style={styles.platform}
                        key={`${item.id}-${platform[0]}`}
                      >
                        {platform[1]}x {platform[0]}
                      </Text>
                    ))}
                  </View>
                </View>
              );
            })}
          </View>
          <Divider style={{ backgroundColor: colors.text }} />
          <Text style={styles.total}>Total: ${total}</Text>
        </Surface>
      </ScrollView>
      <View style={styles.finishOrder}>
        <Button
          color="surface"
          onPress={() => console.log('finish order')}
          customBtnStyles={styles.finishOrderBtn}
        >
          <Text>Finish Order</Text>
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default CartSummary;
