import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width * 0.9,
    marginBottom: 45,
  },
  summaryCard: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Acme',
  },
  total: {
    // fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    fontFamily: 'Inconsolata-Bold',
  },
  finishOrder: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    paddingVertical: 5,
    alignItems: 'center',
  },
  finishOrderBtn: {
    width: Dimensions.get('screen').width * 0.9,
  },
});
