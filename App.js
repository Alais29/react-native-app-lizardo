import { initializeApp } from 'firebase/app';
import React from 'react';
import { Provider } from 'react-redux';

import { firebaseConfig } from './Database/firebase';
import MainNavigation from './Navigation';
import { store } from './Store/store';

initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
