import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flexGrow: 1,
  },
  productPrice: {
    fontSize: 16,
  },
  quantities: {
    marginLeft: 20,
  },
  platform: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});
