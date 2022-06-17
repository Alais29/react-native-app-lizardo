import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: Dimensions.get('screen').width * 0.9,
  },
  accordion: {
    borderRadius: 8,
    marginVertical: 8,
  },
  orderInfo: {
    padding: 8,
  },
});
