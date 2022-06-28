import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '../../Components/ErrorMessage';
import List from '../../Components/List';
import CategoryItem from '../../Components/List/CategoryItem';
import ScreenContainer from '../../Components/ScreenContainer';
import { getCategoriesAsync } from '../../Features/categories/categoriesSlice';
import { Status } from '../../Features/interfaces';
import { isEmpty } from '../../utils/isEmpty';
import { styles } from './styles';

const CategoriesScreen = ({ navigation }) => {
  const { status, error, items } = useSelector(state => state.categories);
  const { user } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === Status.idle) {
      dispatch(getCategoriesAsync(user.token));
    }
  }, []);

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {isEmpty(error) ? (
          <>
            <List
              data={items}
              searchPlaceholder="Search Categories"
              renderItem={({ item }) => (
                <CategoryItem category={item} navigation={navigation} />
              )}
            />
          </>
        ) : (
          <ErrorMessage errorMessage={error} showTryLaterMsg />
        )}
      </View>
    </ScreenContainer>
  );
};

export default CategoriesScreen;
