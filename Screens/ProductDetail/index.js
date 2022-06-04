import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useTheme, Chip, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import { CATEGORIES } from "../../data/categories";
import { isEmpty } from "../../utils/isEmpty";
import ScreenContainer from "../../Components/ScreenContainer";
import Button from "../../Components/Button";

import { styles } from "./styles";
import { colors } from "../../Styles/colors";

const ProductDetailScreen = () => {
  const [platformSelected, setPlatformSelected] = useState({});

  const { itemSelected } = useSelector((state) => state.products);
  const { colors: themeColors } = useTheme();

  const category = CATEGORIES.find((item) => item.id === itemSelected.category);

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View style={styles.imgContainer}>
            <Image
              style={{ borderColor: themeColors.surface, ...styles.image }}
              source={{
                uri: itemSelected.background_image,
              }}
            />
          </View>
          <View
            style={{
              ...styles.infoContainer,
              backgroundColor: themeColors.primary,
            }}
          >
            <View style={styles.chipContainer}>
              <Chip style={{ backgroundColor: themeColors.accent }}>
                {category.name}
              </Chip>
              <View style={styles.rating}>
                <AntDesign name="star" size={18} color={colors.tertiaryLight} />
                <Text style={{ ...styles.rating, color: themeColors.header }}>
                  {itemSelected.rating}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text
                style={{ ...styles.description, color: themeColors.header }}
              >
                {itemSelected.description}
              </Text>
            </View>
            <View
              style={{ ...styles.sectionContainer, ...styles.platFFormSelect }}
            >
              <Text
                style={{ ...styles.description, color: themeColors.header }}
              >
                Select a platform to add to cart
              </Text>
              <SelectDropdown
                data={itemSelected.platforms}
                onSelect={(selectedItem, index) => {
                  setPlatformSelected(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) =>
                  selectedItem.name
                }
                rowTextForSelection={(item, index) => item.name}
                defaultButtonText="Select a platform"
                renderDropdownIcon={() => (
                  <AntDesign name="caretdown" size={10} color="white" />
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
                  color: themeColors.header,
                }}
              />
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.sectionContainer}>
                <Text style={{ ...styles.price, color: themeColors.header }}>
                  ${itemSelected.price}
                </Text>
              </View>
              <Button disabled={isEmpty(platformSelected) ? true : false}>
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProductDetailScreen;
