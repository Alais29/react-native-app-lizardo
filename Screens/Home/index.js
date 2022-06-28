import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from '../../Components/Carousel';
import ErrorMessage from '../../Components/ErrorMessage';
import Header from '../../Components/Header';
import NewsItem from '../../Components/List/NewsItem';
import ProductItem from '../../Components/List/ProductItem';
import ScreenContainer from '../../Components/ScreenContainer';
import Title from '../../Components/Title';
import { Status } from '../../Features/interfaces';
import { getNewsAsync } from '../../Features/news/newsSlice';
import {
  getProductsAsync,
  setTopRatedProducts,
} from '../../Features/products/productsSlice';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
  const {
    status: statusProducts,
    error: errorProducts,
    topRatedProducts,
    items,
  } = useSelector(state => state.products);
  const {
    status: statusNews,
    error: errorNews,
    articles,
  } = useSelector(state => state.news);
  const {user} = useSelector(state => state.auth)

  const dispatch = useDispatch();

  useEffect(() => {
    if (statusProducts === Status.idle) {
      dispatch(getProductsAsync(user.token));
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
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View style={styles.newsContainer}>
          <Title>News</Title>
          {isEmpty(errorNews) ? (
            <Carousel
              data={articles}
              renderItem={({ item }) => <NewsItem article={item} />}
            />
          ) : (
            <ErrorMessage errorMessage={errorNews} showTryLaterMsg />
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
                  navigate={() => navigation.navigate('ProductHome')}
                />
              )}
              itemWidth={180}
            />
          ) : (
            <ErrorMessage errorMessage={errorProducts} showTryLaterMsg />
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;
