import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DB_URL,
  FB_STORAGE_BUCKET,
  FB_PROJECT_ID,
  FB_MSG_SENDER_ID,
  FB_APP_ID,
} from '@env';
import { LogBox } from 'react-native';

export const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  storageBucket: FB_STORAGE_BUCKET,
  projectId: FB_PROJECT_ID,
  messagingSenderId: FB_MSG_SENDER_ID,
  appId: FB_APP_ID,
};

LogBox.ignoreLogs([`Setting a timer for a long period`]);
