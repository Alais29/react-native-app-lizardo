import { ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils/isEmpty";
import {
  getProductsAsync,
  setTopRatedProducts,
} from "../../Features/products/productsSlice";
import { getNewsAsync } from "../../Features/news/newsSlice";
import { Status } from "../../Features/interfaces";
import ScreenContainer from "../../Components/ScreenContainer";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import Carousel from "../../Components/Carousel";
import NewsItem from "../../Components/List/NewsItem";
import ProductItem from "../../Components/List/ProductItem";
import ErrorMessage from "../../Components/ErrorMessage";

import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {
  const {
    status: statusProducts,
    error: errorProducts,
    topRatedProducts,
    items,
  } = useSelector((state) => state.products);
  const {
    status: statusNews,
    error: errorNews,
    articles,
  } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusProducts === Status.idle) {
      dispatch(getProductsAsync());
    }
    if (statusNews === Status.idle) {
      dispatch(getNewsAsync());
    }
  }, []);

  useEffect(() => {
    if (!isEmpty(items) && isEmpty(topRatedProducts)) {
      dispatch(setTopRatedProducts());
    }
  }, [items]);

  return (
    <ScreenContainer>
      <Header showSearch={false} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.newsContainer}>
          <Title>News</Title>
          {isEmpty(errorNews) ? (
            <Carousel
              data={articles}
              renderItem={({ item }) => <NewsItem article={item} />}
            />
          ) : (
            <ErrorMessage errorMessage={errorNews} />
          )}
        </View>
        <View style={styles.gamesContainer}>
          <Title>Top Rated</Title>
          {isEmpty(errorProducts) ? (
            <Carousel
              data={topRatedProducts}
              renderItem={({ item }) => (
                <ProductItem
                  product={item}
                  navigate={() => navigation.navigate("ProductHome")}
                />
              )}
              itemWidth={180}
            />
          ) : (
            <ErrorMessage errorMessage={errorProducts} />
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;
