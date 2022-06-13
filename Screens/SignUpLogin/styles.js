import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: Dimensions.get('screen').width * 0.9,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
});
