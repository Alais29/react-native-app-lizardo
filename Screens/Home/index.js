import { ScrollView, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Searchbar, useTheme } from "react-native-paper";
import { articles } from "../../data/articles";
import { CATEGORIES } from "../../data/categories";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Carousel from "../../Components/Carousel";
import NewsItem from "../../Components/List/NewsItem";
import ProductItem from "../../Components/List/ProductItem";
import List from "../../Components/List";
import { setTopRatedProducts } from "../../Features/products/productsSlice";

import { styles } from "./styles";

const HomeScreen = () => {
  // const [showSearchBar, setShowSearchBar] = useState(false);
  // const [searchQuery, setSearchQuery] = React.useState("");

  // const { width } = useWindowDimensions();
  // const { colors } = useTheme();
  const { topRatedProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const removeBrArticles = articles.filter(
    (item) => !item.url.includes("br.ign")
  );

  useEffect(() => {
    dispatch(setTopRatedProducts());
  }, []);

  // const onPressSearch = () => {
  //   setShowSearchBar(true);
  //   setSearchQuery("");
  // };

  // const onChangeSearch = (query) => setSearchQuery(query);

  // const goBack = () => {
  //   setShowSearchBar(false);
  // };

  return (
    <>
      <Header showSearch={false} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.newsContainer}>
          <Title>News</Title>
          <Carousel
            data={removeBrArticles}
            renderItem={({ item }) => <NewsItem article={item} />}
          />
        </View>
        <View style={styles.gamesContainer}>
          <Title>Top Rated</Title>
          <View style={styles.topProductsListContainer}>
            <Carousel
              data={topRatedProducts}
              renderItem={({ item }) => <ProductItem product={item} />}
              itemWidth={180}
            />
          </View>
        </View>
        {/* {!showSearchBar ? (
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
        )} */}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
