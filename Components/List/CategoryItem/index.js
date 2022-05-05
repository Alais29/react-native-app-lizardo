import { ImageBackground, Text, View } from "react-native";
import React from "react";

import { styles } from "./styles";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={category.image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <Text style={styles.text}>{category.name}</Text>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;
