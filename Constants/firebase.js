// import Config from "react-native-config";

export const DB_URL = process.env.FB_DB_URL;

export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FB_API_KEY}`;

export const AUTH_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FB_API_KEY}`;

export const UPDATE_PROFILE = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.FB_API_KEY}
`;
