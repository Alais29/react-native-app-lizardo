import { createSlice } from "@reduxjs/toolkit";
import { Appearance } from "react-native";

const Theme = Object.freeze({
  dark: "dark",
  light: "light",
});

const initialState = {
  theme: Appearance.getColorScheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === Theme.dark) {
        state.theme = Theme.light;
      } else {
        state.theme = Theme.dark;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
