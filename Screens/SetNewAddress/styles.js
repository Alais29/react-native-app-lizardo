import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  saveAddress: {
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  btn: {
    width: Dimensions.get('screen').width * 0.9,
  },
});
