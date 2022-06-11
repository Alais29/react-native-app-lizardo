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
  inputContainer: {
    flexGrow: 1,
    paddingLeft: 10,
    marginBottom: 10,
  },
  modalContainerStyle: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageInputContainer: {
    flexDirection: 'row',
  },
});
