import axios from "axios";
import { AUTH_SIGNUP, AUTH_SIGNIN } from "../Constants/firebase";

export const signUp = async (userInfo) => {
  try {
    const { email, password } = userInfo;
    const response = await axios.post(AUTH_SIGNUP, {
      email,
      password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (e) {
    throw new Error(
      "There was a problem signing you up. Please try again later."
    );
  }
};

export const signIn = async (userInfo) => {
  try {
    const { email, password } = userInfo;
    const response = await axios.post(AUTH_SIGNIN, {
      email,
      password,
      returnSecureToken: true,
    });
    return response.data;
  } catch (e) {
    throw new Error(
      "There was a problem signing you in. Please try again later."
    );
  }
};
