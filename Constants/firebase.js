import { config } from '../Config';

export const DB_URL = config.FB_DB_URL;

export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${config.FB_API_KEY}`;

export const AUTH_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.FB_API_KEY}`;

export const UPDATE_PROFILE = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${config.FB_API_KEY}
`;
