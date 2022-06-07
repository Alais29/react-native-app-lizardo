import { FlatList, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import { useTheme, ActivityIndicator } from "react-native-paper";

import { styles } from "./styles";

const List = ({ data, itemType, numColumns = 1 }) => {
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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      ListEmptyComponent={
        <ActivityIndicator animating={true} color={colors.surface} />
      }
      contentContainerStyle={styles.container}
    />
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemType: PropTypes.oneOf(["category", "news", "product"]).isRequired,
  numColumns: PropTypes.number,
};
