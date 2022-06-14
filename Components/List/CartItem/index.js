import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useTheme, Text, IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { addItem, removeItem } from '../../../Features/cart/cartSlice';
import { styles } from './styles';

const CartItem = ({ item, isLastItem }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  const platforms = Object.entries(item.quantities);

  const handleRemoveOne = platform => {
    dispatch(removeItem({ id: item.id, platform }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleAdd = platform => {
    dispatch(addItem({ ...item, platformSelected: platform }));
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.surface,
        marginBottom: isLastItem ? 45 : 5,
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: item.background_image,
        }}
      />
      <View style={styles.info}>
        <Text>{item.name}</Text>
        {platforms.map(platform => (
          <View key={`${item.id}-${platform}`} style={styles.platformContainer}>
            <Text style={styles.platform}>{platform[0]}</Text>
            <View style={styles.quantity}>
              <TouchableOpacity
                style={[
                  styles.qtyBtn,
                  styles.qtyBtnMinus,
                  { borderColor: colors.text },
                ]}
                onPress={() => handleRemoveOne(platform[0])}
              >
                <AntDesign name="minus" size={16} color={colors.text} />
              </TouchableOpacity>
              <Text style={{ ...styles.qty, borderColor: colors.text }}>
                {platform[1]}
              </Text>
              <TouchableOpacity
                style={[
                  styles.qtyBtn,
                  styles.qtyBtnPlus,
                  { borderColor: colors.text },
                ]}
                onPress={() => handleAdd(platform[0])}
              >
                <AntDesign name="plus" size={16} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Total Price: ${item.totalPrice}</Text>
        </View>
      </View>
      <IconButton
        icon="delete"
        color={colors.text}
        size={24}
        onPress={handleRemoveItem}
        style={styles.remove}
      />
    </View>
  );
};

export default CartItem;
