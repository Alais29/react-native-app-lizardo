import { ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, useTheme, Text } from "react-native-paper";
import { isEmpty } from "../../utils/isEmpty";
import {
  getProductsAsync,
  setTopRatedProducts,
} from "../../Features/products/productsSlice";
import { getNewsAsync } from "../../Features/news/newsSlice";
import ScreenContainer from "../../Components/ScreenContainer";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Carousel from "../../Components/Carousel";
import NewsItem from "../../Components/List/NewsItem";
import ProductItem from "../../Components/List/ProductItem";

import { styles } from "./styles";

const HomeScreen = () => {
  const {
    status: statusProducts,
    error: errorProducts,
    topRatedProducts,
    products,
  } = useSelector((state) => state.products);
  const {
    status: statusNews,
    error: errorNews,
    news,
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const { colors } = useTheme();

  useEffect(() => {
    if (statusProducts === "idle") {
      dispatch(getProductsAsync());
    }
    if (statusNews === "idle") {
      dispatch(getNewsAsync());
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(products)) {
      dispatch(setTopRatedProducts());
    }
  }, [products]);

  return (
    <ScreenContainer>
      <Header showSearch={false} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.newsContainer}>
          <Title>News</Title>
          {!isEmpty(news) ? (
            <Carousel
              data={news}
              renderItem={({ item }) => <NewsItem article={item} />}
            />
          ) : (
            <View style={styles.emptyContainerNews}>
              {errorNews !== "" ? (
                <View
                  style={{
                    backgroundColor: colors.surface,
                    ...styles.errorTextContainer,
                  }}
                >
                  <Text style={styles.errorText}>{errorProducts}</Text>
                  <Text style={styles.errorText}>Please try again later</Text>
                </View>
              ) : (
                <ActivityIndicator animating={true} color={colors.surface} />
              )}
            </View>
          )}
        </View>
        <View style={styles.gamesContainer}>
          <Title>Top Rated</Title>
          {!isEmpty(topRatedProducts) ? (
            <View style={styles.topProductsListContainer}>
              <Carousel
                data={topRatedProducts}
                renderItem={({ item }) => <ProductItem product={item} />}
                itemWidth={180}
              />
            </View>
          ) : (
            <View style={styles.emptyContainerGames}>
              {errorProducts !== "" ? (
                <View
                  style={{
                    backgroundColor: colors.surface,
                    ...styles.errorTextContainer,
                  }}
                >
                  <Text style={styles.errorText}>{errorProducts}</Text>
                  <Text style={styles.errorText}>Please try again later</Text>
                </View>
              ) : (
                <ActivityIndicator animating={true} color={colors.surface} />
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;
