//Redux slice untuk mengelola artikel berita
// src/store/newsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const apiKey = "lcmw9E6AWKrJ23OyuxmN1iKwmXJRLeiG"
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Peace&api-key=${apiKey}`
  )
  return response.data.response.docs.slice(0, 12)
})

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.articles = action.payload
    })
  },
})

export default newsSlice.reducer
