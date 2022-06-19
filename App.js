import { useFonts } from 'expo-font';
import { initializeApp } from 'firebase/app';
import React from 'react';
import { Provider } from 'react-redux';

import { firebaseConfig } from './DB/firebase';
import { init } from './DB/sqlite';
import MainNavigation from './Navigation';
import { store } from './Store/store';

initializeApp(firebaseConfig);

init()
  .then(() => {
    console.log('Db initialized');
  })
  .catch(err => {
    console.log('Error loading db');
    console.log(err.message);
  });

const App = () => {
  const [loaded] = useFonts({
    Acme: require('./assets/fonts/Acme/Acme-Regular.ttf'),
    Inconsolata: require('./assets/fonts/Inconsolata/Inconsolata-Regular.ttf'),
    'Inconsolata-Bold': require('./assets/fonts/Inconsolata/Inconsolata-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
