import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    paddingTop: 8,
    height: Dimensions.get('screen').height * 0.78,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.78,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.78,
  },
  btnContainer: {
    width: Dimensions.get('screen').width * 0.9,
  },
  customBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  btnIcon: {
    position: 'absolute',
    right: 10,
  },
});
