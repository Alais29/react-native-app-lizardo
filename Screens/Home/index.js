import { View, Text } from "react-native";
import React from "react";
import { articles } from "../../data/articles";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Carousel from "../../Components/Carousel";
import NewsItem from "../../Components/List/NewsItem";

import { styles } from "./styles";

const HomeScreen = () => {
  const removeBrArticles = articles.filter(
    (item) => !item.url.includes("br.ign")
  );

  const renderItem = ({ item }) => <NewsItem article={item} />;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Title>News</Title>
        <View style={styles.listcontainer}>
          <Carousel data={removeBrArticles} renderItem={renderItem} />
        </View>
        <Text>Prueba</Text>
      </View>
    </>
  );
};

export default HomeScreen;
