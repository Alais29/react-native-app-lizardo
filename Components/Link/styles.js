import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  linkContainer: {
    width: Dimensions.get('screen').width * 0.9,
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
