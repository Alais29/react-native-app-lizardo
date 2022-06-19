import 'dotenv/config';

const config = {
  NEWS_API_KEY: process.env.NEWS_API_KEY,
  FB_DB_URL: process.env.FB_DB_URL,
  FB_API_KEY: process.env.FB_API_KEY,
  FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
  FB_PROJECT_ID: process.env.FB_PROJECT_ID,
  FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
  FB_MSG_SENDER_ID: process.env.FB_MSG_SENDER_ID,
  FB_APP_ID: process.env.FB_APP_ID,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
};

export default {
  name: 'RN Videogames Ecommerce',
  slug: 'rn-videogames-ecommerce',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#C99E3A',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: 'com.videogames.ecommerce',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#562505',
    },
    permissions: ['CAMERA', 'ACCESS_FINE_LOCATION', 'WRITE_EXTERNAL_STORAGE'],
    config: {
      googleMaps: {
        apiKey: config.GOOGLE_API_KEY,
      },
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    NEWS_API_KEY: config.NEWS_API_KEY,
    FB_DB_URL: config.FB_DB_URL,
    FB_API_KEY: config.FB_API_KEY,
    FB_AUTH_DOMAIN: config.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: config.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: config.FB_STORAGE_BUCKET,
    FB_MSG_SENDER_ID: config.FB_MSG_SENDER_ID,
    FB_APP_ID: config.FB_APP_ID,
    GOOGLE_API_KEY: config.GOOGLE_API_KEY,
  },
};
