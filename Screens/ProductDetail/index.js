import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useTheme, Chip, Text } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import Toast from 'react-native-toast-message';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../Components/Button';
import ScreenContainer from '../../Components/ScreenContainer';
import { addItem } from '../../Features/cart/cartSlice';
import { getCategoriesAsync } from '../../Features/categories/categoriesSlice';
import { Status } from '../../Features/interfaces';
import { colors } from '../../Styles/colors';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const ProductDetailScreen = () => {
  const [platformSelected, setPlatformSelected] = useState({});
  const [category, setCategory] = useState({});

  const { status, items: categories } = useSelector(state => state.categories);
  const { productSelected } = useSelector(state => state.products);
  const { user } = useSelector(state => state.auth);
  const { colors: themeColors } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.idle) {
      dispatch(getCategoriesAsync(user.token));
    }
  }, []);

  useEffect(() => {
    if (status === Status.success) {
      const productCategory = categories.find(
        item => item.id === productSelected.category,
      );
      setCategory(productCategory);
    }
  }, [categories]);

  const handleAddToCart = () => {
    dispatch(
      addItem({ ...productSelected, platformSelected: platformSelected.name }),
    );
    Toast.show({
      type: 'success',
      text1: 'Product added to cart',
    });
  };

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            height: '100%',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              style={{ borderColor: themeColors.surface, ...styles.image }}
              source={{
                uri: productSelected.background_image,
              }}
            />
          </View>
          <View
            style={{
              ...styles.infoContainer,
              backgroundColor: themeColors.primary,
            }}
          >
            <View style={styles.sectionContainer}>
              <Text style={{ ...styles.title, color: themeColors.header }}>
                {productSelected.name}
              </Text>
            </View>
            <View style={styles.chipContainer}>
              {!isEmpty(category) ? (
                <Chip
                  style={{ backgroundColor: themeColors.accent }}
                  textStyle={styles.chip}
                >
                  {category.name}
                </Chip>
              ) : null}
              <View style={styles.rating}>
                <AntDesign name="star" size={18} color={colors.tertiaryLight} />
                <Text style={{ ...styles.rating, color: themeColors.header }}>
                  {productSelected.rating}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text
                style={{ ...styles.description, color: themeColors.header }}
              >
                {productSelected.description}
              </Text>
            </View>
            <View
              style={{ ...styles.sectionContainer, ...styles.platformSelect }}
            >
              <Text
                style={{
                  ...styles.platformSelectText,
                  color: themeColors.header,
                }}
              >
                Select a platform to add to cart
              </Text>
              <SelectDropdown
                data={productSelected.platforms}
                onSelect={selectedItem => {
                  setPlatformSelected(selectedItem);
                }}
                buttonTextAfterSelection={selectedItem => selectedItem.name}
                rowTextForSelection={item => item.name}
                defaultButtonText="Select a platform"
                renderDropdownIcon={() => (
                  <AntDesign
                    name="caretdown"
                    size={10}
                    color={themeColors.header}
                  />
                )}
                buttonStyle={{
                  backgroundColor: themeColors.background,
                  ...styles.dropdownBtnStyle,
                }}
                buttonTextStyle={{
                  color: themeColors.header,
                  ...styles.dropdownTextStyle,
                }}
                rowStyle={{
                  height: 30,
                  backgroundColor: themeColors.background,
                }}
                rowTextStyle={{
                  ...styles.rowTextStyle,
                  color: themeColors.header,
                }}
              />
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.sectionContainer}>
                <Text style={{ ...styles.price, color: themeColors.header }}>
                  ${productSelected.price}
                </Text>
              </View>
              <Button
                disabled={!!isEmpty(platformSelected)}
                onPress={handleAddToCart}
              >
                <Text
                  style={{
                    color: themeColors.header,
                    fontFamily: 'Acme',
                  }}
                >
                  Add to Cart
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProductDetailScreen;
