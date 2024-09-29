//Konfigurasi store redux
// src/store/store.js
import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./countrySlice"
import newsReducer from "./newsSlice"

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    news: newsReducer,
  },
})