import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useTheme, ActivityIndicator } from 'react-native-paper';
import { Carousel as SnapCarousel } from 'react-native-snap-carousel';

import { styles } from './styles';

const Carousel = ({ data, renderItem, itemWidth }) => {
  const { width } = useWindowDimensions();
  const isCarousel = useRef(null);
  const { colors } = useTheme();

  return (
    <SnapCarousel
      ref={isCarousel}
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={itemWidth ? itemWidth : width * 0.8}
      firstItem={1}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <ActivityIndicator animating color={colors.surface} />
        </View>
      }
      contentContainerCustomStyle={styles.container}
    />
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  itemWidth: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
};

export default Carousel;
