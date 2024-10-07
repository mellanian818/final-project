// Hasil perbandingan negara
import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const formatPopulation = (population) => {
  if (population >= 1_000_000_000) {
    return (population / 1_000_000_000).toFixed(1) + "B" // Miliar
  } else if (population >= 1_000_000) {
    return (population / 1_000_000).toFixed(1) + "M" // Juta
  } else if (population >= 1_000) {
    return (population / 1_000).toFixed(1) + "K" // Ribu
  }
  return population.toString() // Jika kurang dari 1000, tampilkan angka biasa
}

const ComparisonPage = () => {
  const { page1, page2 } = useParams()
  const countries = useSelector((state) => state.countries.data)

  const country1 = countries.find((country) => country.cca2 === page1)
  const country2 = countries.find((country) => country.cca2 === page2)

  // if (!country1 || !country2) return <p>Countries not found for comparison.</p>

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Country Comparison
      </h2>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border px-6 py-3 text-lg font-bold text-gray-600">
              Data
            </th>
            <th className="border px-6 py-3 text-lg font-bold text-gray-600">
              {country1.name.common}
            </th>
            <th className="border px-6 py-3 text-lg font-bold text-gray-600">
              {country2.name.common}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-6 py-4 font-semibold">Population</td>
            <td className="border px-6 py-4">
              {formatPopulation(country1.population)}
            </td>
            <td className="border px-6 py-4">
              {formatPopulation(country2.population)}
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4 font-semibold">Region</td>
            <td className="border px-6 py-4">{country1.region}</td>
            <td className="border px-6 py-4">{country2.region}</td>
          </tr>
          <tr>
            <td className="border px-6 py-4 font-semibold">Capital</td>
            <td className="border px-6 py-4">
              {country1.capital?.[0] || "N/A"}
            </td>
            <td className="border px-6 py-4">
              {country2.capital?.[0] || "N/A"}
            </td>
          </tr>
          <tr>
            <td className="border px-6 py-4 font-semibold">Status</td>
            <td className="border px-6 py-4">{country1.status || "N/A"}</td>
            <td className="border px-6 py-4">{country2.status || "N/A"}</td>
          </tr>
          <tr>
            <td className="border px-6 py-4 font-semibold">Flag</td>
            <td className="border px-6 py-4">
              <img
                src={country1.flags.png}
                alt={country1.name.common}
                className="w-16 h-10 object-cover"
              />
            </td>
            <td className="border px-6 py-4">
              <img
                src={country2.flags.png}
                alt={country2.name.common}
                className="w-16 h-10 object-cover"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonPage
