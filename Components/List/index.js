import { FlatList, useWindowDimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";
import NewsItem from "./NewsItem";

const List = ({ data, itemType, numColumns = 1, horizontal = false }) => {
  const { width } = useWindowDimensions();
  const renderItem = ({ item }) => {
    switch (itemType) {
      case "category":
        return <CategoryItem category={item} />;
      case "product":
        return <ProductItem />;
      case "news":
        return <NewsItem article={item} />;
      default:
        <Text>No itemType provided</Text>;
    }
  };

  const isCarousel = React.useRef(null);

  return (
    <>
      {itemType !== "news" ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) =>
            itemType === "news" ? item.publishedAt : item.id
          }
          numColumns={numColumns}
          horizontal={horizontal}
        />
      ) : (
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width * 0.8}
        />
      )}
    </>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemType: PropTypes.oneOf(["category", "news", "product"]).isRequired,
  numColumns: PropTypes.number,
  horizontal: PropTypes.bool,
};
