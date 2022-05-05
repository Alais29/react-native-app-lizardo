import { FlatList, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";

const List = ({ data, itemType = "category" }) => {
  const renderItem = ({ item }) => {
    return itemType === "category" ? (
      <CategoryItem category={item} />
    ) : (
      <ProductItem />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={itemType === "category" ? 2 : 1}
    />
  );
};

export default List;
