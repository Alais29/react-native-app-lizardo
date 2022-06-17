import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Acme',
  },
  subtitle: {
    fontSize: 14,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
