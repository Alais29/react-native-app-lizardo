import { useWindowDimensions } from "react-native";
import { Carousel as SnapCarousel } from "react-native-snap-carousel";
import React from "react";

// import { styles } from "./styles";

const Carousel = ({ data, renderItem }) => {
  const { width } = useWindowDimensions();
  const isCarousel = React.useRef(null);

  return (
    <SnapCarousel
      ref={isCarousel}
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
    />
  );
};

export default Carousel;
