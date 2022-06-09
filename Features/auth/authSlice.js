import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../Services/auth";

const initialState = {
  user: {
    userID: "",
    email: "",
    token: "",
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user;
    },
  },
  extraReducers: {
    [signUpAsync.pending]: (state) => {
      state.loading = true;
    },
    [signUpAsync.fulfilled]: (state, { payload }) => {
      state.loading = false;
      debugger;
      if (payload.error) {
        state.error = payload.error.message;
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
      if (payload.error) {
        state.error = payload.error.message;
      } else {
        state.error = "";
        state.user.userID = payload.localId;
        state.user.email = payload.email;
        state.user.token = payload.idToken;
      }
    },
    [signInAsync.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.error.message;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
