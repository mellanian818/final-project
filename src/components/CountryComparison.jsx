//Hasil perbandingan negara
import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ComparisonPage = () => {
  const { page1, page2 } = useParams()
  const countries = useSelector((state) => state.countries.data)

  const country1 = countries.find((country) => country.cca2 === page1)
  const country2 = countries.find((country) => country.cca2 === page2)

  if (!country1 || !country2) return <p>Countries not found for comparison.</p>

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
              {country1.population.toLocaleString()}
            </td>
            <td className="border px-6 py-4">
              {country2.population.toLocaleString()}
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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">{country1.name.common}</h3>
          <p>
            <strong>Population:</strong> {country1.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country1.region}
          </p>
          <p>
            <strong>Capital:</strong> {country1.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Status:</strong> {country1.status}
          </p>
          <img
            src={country1.flags.png}
            alt={country1.name.common}
            className="w-16 h-10 object-cover"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">{country2.name.common}</h3>
          <p>
            <strong>Population:</strong> {country2.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country2.region}
          </p>
          <p>
            <strong>Capital:</strong> {country2.capital?.[0] || "N/A"}
          </p>
          <p>
            <strong>Status:</strong> {country2.status}
          </p>
          <img
            src={country2.flags.png}
            alt={country2.name.common}
            className="w-16 h-10 object-cover"
          />
        </div>
      </div> */}
    </div>
  )
}

export default ComparisonPage
