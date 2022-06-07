import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FlatList, Text } from "react-native";
import { useTheme, ActivityIndicator, Searchbar } from "react-native-paper";
import { isEmpty } from "../../utils/isEmpty";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import ErrorMessage from "../ErrorMessage";

import { styles } from "./styles";

const List = ({ data, itemType, numColumns = 1, showSearch = true }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setfilteredData] = useState([]);

  const { colors } = useTheme();

  const renderItem = ({ item }) => {
    switch (itemType) {
      case "category":
        return <CategoryItem category={item} />;
      case "product":
        return <ProductItem product={item} />;
      default:
        <Text>No itemType provided</Text>;
    }
  };

  useEffect(() => {
    setfilteredData(data);
  }, [data]);

  useEffect(() => {
    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setfilteredData(filteredItems);
  }, [searchQuery]);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      {showSearch ? (
        <Searchbar
          placeholder="Search categories"
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholderTextColor={colors.text}
        />
      ) : null}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        ListEmptyComponent={
          isEmpty(searchQuery) ? (
            <ActivityIndicator animating={true} color={colors.surface} />
          ) : (
            <ErrorMessage
              errorMessage="No categories match your search."
              search={true}
            />
          )
        }
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemType: PropTypes.oneOf(["category", "product"]).isRequired,
  numColumns: PropTypes.number,
};
