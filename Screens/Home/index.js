import { View, Text, FlatList } from "react-native";
import React from "react";
import { articles } from "../../data/articles";
import Header from "../../Components/Header";
import List from "../../Components/List";

import { styles } from "./styles";

const HomeScreen = () => {
  const removeBrArticles = articles.filter(
    (item) => !item.url.includes("br.ign")
  );
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.listcontainer}>
          <List data={removeBrArticles} itemType={"news"} horizontal={true} />
        </View>
        <Text>Prueba</Text>
      </View>
    </>
  );
};

export default HomeScreen;
