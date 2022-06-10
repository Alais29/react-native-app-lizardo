import { FB_DB_URL, FB_API_KEY } from "@env";

export const DB_URL = FB_DB_URL;

export const AUTH_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FB_API_KEY}`;

export const AUTH_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FB_API_KEY}`;

export const UPDATE_PROFILE = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FB_API_KEY}
`;
