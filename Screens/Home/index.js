import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { articles } from "../../data/articles";
import { CATEGORIES } from "../../data/categories";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Carousel from "../../Components/Carousel";
import NewsItem from "../../Components/List/NewsItem";
import List from "../../Components/List";

import { styles } from "./styles";
import { Button, Searchbar, useTheme } from "react-native-paper";

const HomeScreen = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  const removeBrArticles = articles.filter(
    (item) => !item.url.includes("br.ign")
  );

  const onPressSearch = () => {
    setShowSearchBar(true);
    setSearchQuery("");
  };

  const onChangeSearch = (query) => setSearchQuery(query);

  const goBack = () => {
    setShowSearchBar(false);
  };

  return (
    <>
      <Header showSearch={false} />
      <View style={styles.container}>
        {!showSearchBar ? (
          <View style={styles.newsContainer}>
            <Title>News</Title>
            <Carousel
              data={removeBrArticles}
              renderItem={({ item }) => <NewsItem article={item} />}
            />
          </View>
        ) : (
          <View style={{ width: width * 0.9 }}>
            <Searchbar
              placeholder="Search in Categories..."
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.search}
              placeholderTextColor={colors.text}
            />
            <Button mode="contained" onPress={goBack}>
              Go back
            </Button>
          </View>
        )}
        <View style={styles.categoriesContainer}>
          <Title>Categories</Title>
          <List
            data={CATEGORIES}
            itemType="category"
            horizontal={showSearchBar ? false : true}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
