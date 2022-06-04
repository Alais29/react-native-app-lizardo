import { View, Image, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme, Chip, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { CATEGORIES } from "../../data/categories";
import ScreenContainer from "../../Components/ScreenContainer";
import Button from "../../Components/Button";

import { styles } from "./styles";
import { colors } from "../../Styles/colors";

const ProductDetailScreen = () => {
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
            <View style={styles.priceContainer}>
              <View style={styles.sectionContainer}>
                <Text style={{ ...styles.price, color: themeColors.header }}>
                  ${itemSelected.price}
                </Text>
              </View>
              <Button>Add to Cart</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProductDetailScreen;
