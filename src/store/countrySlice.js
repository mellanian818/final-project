//Redux slice untuk mengelola data negara
// src/store/countrySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const formatPopulation = (population) => {
  if (population >= 1_000_000_000) {
    return (population / 1_000_000_000).toFixed(1) + "B"
  } else if (population >= 1_000_000) {
    return (population / 1_000_000).toFixed(1) + "M"
  } else if (population >= 1_000) {
    return (population / 1_000).toFixed(1) + "K"
  } else {
    return population
  }
}

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all")
    // Urutkan berdasarkan populasi dari terbesar ke terkecil
    const sortedCountries = response.data.sort(
      (a, b) => b.population - a.population
    )

    // Format populasi dan return hasilnya
    return sortedCountries.map((country) => ({
      ...country,
      formattedPopulation: formatPopulation(country.population),
    }))
  }
)

export const countrySlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    comparison: null,
  },
  reducers: {
    compareCountries: (state, action) => {
      const country1 = state.data.find(
        (country) => country.name.common === action.payload.country1
      )
      const country2 = state.data.find(
        (country) => country.name.common === action.payload.country2
      )
      state.comparison = { country1, country2 }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const { compareCountries } = countrySlice.actions
export default countrySlice.reducer
