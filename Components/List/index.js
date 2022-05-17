import { FlatList } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";

const List = ({ data, itemType, numColumns = 1, horizontal = false }) => {
  const renderItem = ({ item }) => {
    switch (itemType) {
      case "category":
        return <CategoryItem category={item} />;
      case "product":
        return <ProductItem />;
      default:
        <Text>No itemType provided</Text>;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      horizontal={horizontal}
    />
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemType: PropTypes.oneOf(["category", "news", "product"]).isRequired,
  numColumns: PropTypes.number,
};
