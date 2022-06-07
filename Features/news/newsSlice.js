import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../Services/news";
import { Status } from "../interfaces";

const initialState = {
  articles: [],
  status: Status.idle,
  error: "",
};

export const getNewsAsync = createAsyncThunk("news/getNews", async () => {
  const response = await getNews();
  return response;
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [getNewsAsync.pending]: (state) => {
      state.status = Status.loading;
    },
    [getNewsAsync.fulfilled]: (state, { payload }) => {
      state.status = Status.success;
      const removeBrChEsArticles = payload.filter(
        (item) =>
          !item.url.includes("br.ign") &&
          !item.url.includes("chinese") &&
          !item.url.includes("es.ign")
      );
      state.articles = removeBrChEsArticles;
    },
    [getNewsAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
  },
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;
