import React from 'react';
import { View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import { styles } from './styles';

const CartSummaryItem = ({ item }) => {
  const { colors } = useTheme();
  const platformsQty = Object.entries(item.quantities);

  const qty = platformsQty.reduce((total, item) => {
    return (total += item[1]);
  }, 0);

  return (
    <View
      style={{ ...styles.product, backgroundColor: colors.accent }}
      key={item.id}
    >
      <View style={styles.productTitleContainer}>
        <Text style={styles.productTitle}>
          {qty} {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.totalPrice}</Text>
      </View>
      <View style={styles.quantities}>
        {platformsQty.map(platform => (
          <Text style={styles.platform} key={`${item.id}-${platform[0]}`}>
            {platform[1]}x {platform[0]}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default CartSummaryItem;
