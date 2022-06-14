import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 8,
    marginVertical: 5,
  },
  image: {
    height: 100,
    width: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  info: {
    width: Dimensions.get('screen').width * 0.5,
  },
  remove: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  platformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platform: {
    flexBasis: 50,
    flexGrow: 1,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    marginLeft: 8,
    // borderRadius: 8,
    marginBottom: 5,
  },
  qtyBtn: {
    padding: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  qtyBtnPlus: {
    backgroundColor: '#008905',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderRightWidth: 1,
  },
  qtyBtnMinus: {
    backgroundColor: '#C73333',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderLeftWidth: 1,
  },
  qty: {
    paddingVertical: 4.1,
    paddingHorizontal: 8,
    borderWidth: 1,
    fontSize: 12,
  },
  priceContainer: {
    paddingVertical: 8,
  },
});
