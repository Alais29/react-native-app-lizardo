import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import Config from "react-native-config";

console.log("FB_STORAGE_BUCKET", {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  projectId: process.env.FB_PROJECT_ID,
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  projectId: process.env.FB_PROJECT_ID,
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// export const fbStorage = getStorage(firebaseApp);
