import { Text, View, ImageBackground } from "react-native";
import { useTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { styles } from "./styles";
import { colors } from "../../../Styles/colors";

const ProductItem = ({ product }) => {
  const { colors: colorsTheme } = useTheme();

  const platforms = product.platforms.reduce((platforms, item) => {
    if (item.slug.includes("play")) platforms.push("playstation");
    if (item.slug.includes("xbox")) platforms.push("xbox");
    if (item.slug.includes("pc")) platforms.push("windows");
    if (item.slug.includes("nintendo")) platforms.push("nintendo");
    return platforms;
  }, []);

  const platformsUnique = Array.from(new Set(platforms));

  const platformsMapping = {
    nintendo: (key) => (
      <MaterialCommunityIcons
        key={key}
        name="nintendo-switch"
        size={14}
        color="white"
        style={styles.platform}
      />
    ),
    windows: (key) => (
      <AntDesign
        key={key}
        name="windows"
        size={14}
        color="white"
        style={styles.platform}
      />
    ),
    playstation: (key) => (
      <FontAwesome5
        key={key}
        name="playstation"
        size={14}
        color="white"
        style={styles.platform}
      />
    ),
    xbox: (key) => (
      <FontAwesome5
        key={key}
        name="xbox"
        size={14}
        color="white"
        style={styles.platform}
      />
    ),
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: product.background_image }}
        resizeMode="cover"
        style={styles.backgroundImageSize}
        imageStyle={{
          ...styles.backgroundImage,
          borderColor: colorsTheme.surface,
        }}
      >
        <View style={styles.gameInfoContainer}>
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
            style={styles.gradient}
          />
          <View style={styles.platforms}>
            {platformsUnique.map((item, index) =>
              platformsMapping[item](index)
            )}
          </View>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={18} color={colors.primaryLight} />
            <Text style={styles.rating}>{product.rating}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductItem;
