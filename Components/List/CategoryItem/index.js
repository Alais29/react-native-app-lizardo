import { ImageBackground, Text, useWindowDimensions, View } from "react-native";
import React from "react";

import { styles } from "./styles";

const CategoryItem = ({ category }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ ...styles.container, width: width * 0.9 }}>
      <Text>{category.name}</Text>
    </View>
  );
};

export default CategoryItem;
