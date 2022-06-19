import Constants from 'expo-constants';

export const config = {
  NEWS_API_KEY: Constants.manifest.extra.NEWS_API_KEY,
  FB_DB_URL: Constants.manifest.extra.FB_DB_URL,
  FB_API_KEY: Constants.manifest.extra.FB_API_KEY,
  FB_AUTH_DOMAIN: Constants.manifest.extra.FB_AUTH_DOMAIN,
  FB_PROJECT_ID: Constants.manifest.extra.FB_PROJECT_ID,
  FB_STORAGE_BUCKET: Constants.manifest.extra.FB_STORAGE_BUCKET,
  FB_MSG_SENDER_ID: Constants.manifest.extra.FB_MSG_SENDER_ID,
  FB_APP_ID: Constants.manifest.extra.FB_APP_ID,
  GOOGLE_API_KEY: Constants.manifest.extra.GOOGLE_API_KEY,
};
