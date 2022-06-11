import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imgBackgroundContainer: {
    marginVertical: 9,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
  },
  imgBackground: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
  },
  titleContainer: {
    position: 'relative',
    height: 80,
    justifyContent: 'center',
    borderWidth: 2,
    paddingHorizontal: 30,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 8,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 76,
    flex: 1,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 6,
  },
});
