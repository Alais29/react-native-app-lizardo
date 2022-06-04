import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../../Services/news";

const Status = Object.freeze({
  idle: "idle",
  loading: "loading",
  success: "success",
  failed: "failed",
});

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
      const removeBrChArticles = payload.filter(
        (item) => !item.url.includes("br.ign") && !item.url.includes("chinese")
      );
      state.articles = removeBrChArticles;
    },
    [getNewsAsync.rejected]: (state, payload) => {
      state.status = Status.failed;
      state.error = payload.error.message;
    },
  },
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;