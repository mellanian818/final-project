//Form untuk membandingkan negara
// src/components/CountryComparisonForm.jsx
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { useNavigate } from "react-router-dom"
import { fetchCountries } from "../store/countrySlice"

const CountryComparisonForm = () => {
  const [selectedCountry1, setSelectedCountry1] = useState(null)
  const [selectedCountry2, setSelectedCountry2] = useState(null)
  const countries = useSelector((state) => state.countries.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries())
    }
  }, [dispatch, countries.length])

  // Mengubah data negara menjadi format yang bisa dipakai oleh react-select
  const countryOptions = countries.map((country) => ({
    value: country.cca2, // gunakan cca2 sebagai value
    label: country.name.common,
  }))

  const handleCompare = () => {
    if (selectedCountry1 && selectedCountry2) {
      // Redirect ke halaman hasil perbandingan
      navigate(`/compare/${selectedCountry1.value}/n/${selectedCountry2.value}`)
    } else {
      alert("Please select both countries to compare.")
    }
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Compare Countries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Select untuk Country 1 */}
        <Select
          options={countryOptions}
          value={selectedCountry1}
          onChange={setSelectedCountry1}
          placeholder="Select Country 1"
          className="p-2 rounded-lg"
        />

        {/* Select untuk Country 2 */}
        <Select
          options={countryOptions}
          value={selectedCountry2}
          onChange={setSelectedCountry2}
          placeholder="Select Country 2"
          className="p-2 rounded-lg"
        />
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleCompare}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Compare
        </button>
      </div>
    </div>
  )
}

export default CountryComparisonForm
