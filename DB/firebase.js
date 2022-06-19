import { LogBox } from 'react-native';

import { config } from '../Config';

export const firebaseConfig = {
  apiKey: config.FB_API_KEY,
  authDomain: config.FB_AUTH_DOMAIN,
  databaseURL: config.FB_DB_URL,
  storageBucket: config.FB_STORAGE_BUCKET,
  projectId: config.FB_PROJECT_ID,
  messagingSenderId: config.FB_MSG_SENDER_ID,
  appId: config.FB_APP_ID,
};

LogBox.ignoreLogs([`Setting a timer for a long period`]);
