import {
  ImageBackground,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { styles } from "./styles";

const CategoryItem = ({ category }) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  const handlePress = () => {
    console.log("select category");
    // dispatch(setProductSelected(product));
    // navigation.navigate("Product");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ ...styles.container, width: width * 0.9 }}
    >
      <ImageBackground
        source={{ uri: category.image }}
        resizeMode="cover"
        style={{
          ...styles.imgBackgroundContainer,
          width: width * 0.9,
          backgroundColor: colors.primary,
        }}
        imageStyle={{
          ...styles.imgBackground,
        }}
      >
        <View style={{ ...styles.titleContainer, borderColor: colors.surface }}>
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
            style={styles.gradient}
            start={[1, 0]}
            end={[0, 0]}
          />
          <Text style={{ color: "#fff" }}>{category.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
