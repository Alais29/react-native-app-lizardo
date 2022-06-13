import axios from 'axios';

import {
  AUTH_SIGNUP,
  AUTH_SIGNIN,
  UPDATE_PROFILE,
} from '../Constants/firebase';

export const signUp = async userInfo => {
  const { email, password } = userInfo;
  const response = await axios.post(AUTH_SIGNUP, {
    email,
    password,
    returnSecureToken: true,
  });
  return response.data;
};

export const signIn = async userInfo => {
  const { email, password } = userInfo;
  const response = await axios.post(AUTH_SIGNIN, {
    email,
    password,
    returnSecureToken: true,
  });
  return response.data;
};

export const updateProfile = async userInfo => {
  const { idToken, displayName, photoUrl } = userInfo;
  const response = await axios.post(UPDATE_PROFILE, {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true,
  });
  return response.data;
};
