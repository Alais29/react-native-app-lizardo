import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { useTheme, ActivityIndicator, Searchbar } from 'react-native-paper';

import { isEmpty } from '../../utils/isEmpty';
import ErrorMessage from '../ErrorMessage';
import { styles } from './styles';

const List = ({
  renderItem,
  data,
  numColumns = 1,
  showSearch = true,
  searchPlaceholder = 'Search',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setfilteredData] = useState([]);

  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setfilteredData(data);
  }, [data]);

  useEffect(() => {
    const filteredItems = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setfilteredData(filteredItems);
  }, [searchQuery]);

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <>
      {showSearch ? (
        <Searchbar
          placeholder={searchPlaceholder}
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholderTextColor={colors.text}
        />
      ) : null}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={{
          ...styles.container,
          width: width * 0.9,
          justifyContent: filteredData.length !== 0 ? 'flex-start' : 'center',
        }}
        columnWrapperStyle={
          numColumns > 1 ? { justifyContent: 'space-between' } : null
        }
        ListEmptyComponent={
          isEmpty(searchQuery) ? (
            <ActivityIndicator animating color={colors.surface} />
          ) : (
            <ErrorMessage errorMessage="No items match your search." />
          )
        }
      />
    </>
  );
};

export default List;

List.propTypes = {
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  numColumns: PropTypes.number,
  showSearch: PropTypes.bool,
};
