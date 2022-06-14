import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';

import ErrorMessage from '../../Components/ErrorMessage';
import List from '../../Components/List';
import ProductItem from '../../Components/List/ProductItem';
import ScreenContainer from '../../Components/ScreenContainer';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const ProductsScreen = ({ navigation }) => {
  const { productsByCategory, error } = useSelector(state => state.products);

  const { width } = useWindowDimensions();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {isEmpty(error) ? (
          <>
            <List
              renderItem={({ item }) => (
                <ProductItem
                  product={item}
                  navigate={() => navigation.navigate('ProductShop')}
                  width={width * 0.42}
                  height={width * 0.42 * 1.3}
                />
              )}
              data={productsByCategory}
              numColumns={2}
              searchPlaceholder="Search Games"
            />
          </>
        ) : (
          <ErrorMessage errorMessage={error} showTryLaterMsg />
        )}
      </View>
    </ScreenContainer>
  );
};

export default ProductsScreen;
