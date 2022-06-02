import { useWindowDimensions } from "react-native";
import { Carousel as SnapCarousel } from "react-native-snap-carousel";
import React from "react";

const Carousel = ({ data, renderItem, itemWidth }) => {
  const { width } = useWindowDimensions();
  const isCarousel = React.useRef(null);

  return (
    <SnapCarousel
      ref={isCarousel}
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={itemWidth ? itemWidth : width * 0.8}
      firstItem={1}
    />
  );
};

export default Carousel;
