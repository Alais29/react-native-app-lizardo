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
    fontWeight: 'bold',
  },
  product: {
    marginVertical: 5,
    borderRadius: 8,
    padding: 8,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    flexBasis: '80%',
  },
  quantities: {
    marginLeft: 20,
  },
  platform: {
    fontSize: 13,
    fontStyle: 'italic',
  },
  total: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-end',
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
