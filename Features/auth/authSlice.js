import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, updateProfile } from "../../Services/auth";

const initialState = {
  user: {
    userID: "",
    email: "",
    token: "",
    displayName: "",
    photoUrl: "",
    photoDownloadUrl: "",
  },
  loading: false,
  error: "",
};

export const signUpAsync = createAsyncThunk("auth/signUp", async (userInfo) => {
  const response = await signUp(userInfo);
  return response;
});

export const signInAsync = createAsyncThunk("auth/signIn", async (userInfo) => {
  const response = await signIn(userInfo);
  return response;
});

export const updateProfileAsync = createAsyncThunk(
  "auth/updateProfile",
  async (userInfo) => {
    const response = await updateProfile(userInfo);
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
    setPhotoDownloadUrl: (state, { payload }) => {
      state.user.photoDownloadUrl = payload;
    },
  },
  extraReducers: {
    [signUpAsync.pending]: (state) => {
      state.loading = true;
    },
    [signUpAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.data?.error) {
        state.error = payload.data?.error.message;
      } else {
        state.error = "";
        state.user.userID = payload.localId;
        state.user.email = payload.email;
        state.user.token = payload.idToken;
      }
    },
    [signUpAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error.message;
    },
    [signInAsync.pending]: (state) => {
      state.loading = true;
    },
    [signInAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.data?.error) {
        state.error = payload.data?.error.message;
      } else {
        state.error = "";
        state.user.userID = payload.localId;
        state.user.email = payload.email;
        state.user.token = payload.idToken;
        state.user.displayName = payload.displayName;
        state.user.photoUrl = payload.profilePicture;
      }
    },
    [signInAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error.message;
    },
    [updateProfileAsync.pending]: (state) => {
      state.loading = true;
    },
    [updateProfileAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      if (payload.data?.error) {
        state.error = payload.data?.error.message;
      } else {
        state.error = "";
        state.user.displayName = payload.displayName;
        state.user.photoUrl = payload.photoUrl;
      }
    },
    [updateProfileAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error.message;
    },
  },
});

export const { logout, setPhotoDownloadUrl } = authSlice.actions;

export default authSlice.reducer;
