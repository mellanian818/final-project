// src/pages/ComparisonPage.jsx
import React from "react"
import { useSelector } from "react-redux"

const ComparisonPage = () => {
  const comparison = useSelector((state) => state.countries.comparison)

  if (!comparison) return <p>Please select countries to compare.</p>

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Country Comparison
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            {comparison.country1.name.common}
          </h3>
          <p>
            <strong>Population:</strong>{" "}
            {comparison.country1.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {comparison.country1.region}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">
            {comparison.country2.name.common}
          </h3>
          <p>
            <strong>Population:</strong>{" "}
            {comparison.country2.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {comparison.country2.region}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComparisonPage
