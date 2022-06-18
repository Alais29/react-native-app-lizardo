import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import { styles } from './styles';

const SummaryItem = ({ item, customBackgroundColor, customTextColor }) => {
  const { colors } = useTheme();
  const platformsQty = Object.entries(item.quantities);

  const qty = platformsQty.reduce((total, item) => {
    return (total += item[1]);
  }, 0);

  const textColor = customTextColor ? customTextColor : colors.text;

  return (
    <View
      style={{
        ...styles.product,
        backgroundColor: customBackgroundColor
          ? customBackgroundColor
          : colors.accent,
      }}
      key={item.id}
    >
      <View style={styles.productTitleContainer}>
        <Text style={{ ...styles.productTitle, color: textColor }}>
          {qty} {item.name}
        </Text>
        <Text style={{ ...styles.productPrice, color: textColor }}>
          ${item.totalPrice}
        </Text>
      </View>
      <View style={styles.quantities}>
        {platformsQty.map(platform => (
          <Text
            style={{ ...styles.platform, color: textColor }}
            key={`${item.id}-${platform[0]}`}
          >
            {platform[1]}x {platform[0]}
          </Text>
        ))}
      </View>
    </View>
  );
};

SummaryItem.propTypes = {
  customBackgroundColor: PropTypes.string,
  customTextColor: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantities: PropTypes.object.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default SummaryItem;
