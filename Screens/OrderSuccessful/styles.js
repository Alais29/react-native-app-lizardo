import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width * 0.9,
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 7,
  },
  orderInfo: {
    marginVertical: 5,
    alignItems: 'center',
  },
  infoText: {
    textAlign: 'center',
  },
  infoTextTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
