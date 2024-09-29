// src/pages/LandingPage.jsx
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../store/countrySlice"

const LandingPage = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries.data || [])
  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage] = useState(25)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  // Hitung index dari berita yang ditampilkan di setiap halaman
  const indexOfLastCountry = currentPage * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage
  const currentCountry = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  // Ganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Hitung jumlah halaman yang diperlukan
  const totalPages = Math.ceil(countries.length / countryPerPage)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto overflow-x-auto">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Country Rankings
        </h1>
        <table className="min-w-full border-collapse block md:table bg-white shadow-lg">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-300 md:table-row">
              <th className="border border-gray-300 md:table-cell px-4 py-2">
                Flag
              </th>
              <th className="border border-gray-300 md:table-cell px-4 py-2">
                Name
              </th>
              <th className="border border-gray-300 md:table-cell px-4 py-2">
                Population
              </th>
              <th className="border border-gray-300 md:table-cell px-4 py-2">
                Code
              </th>
            </tr>
          </thead>
          <tbody>
            {currentCountry.map((country) => (
              <tr
                key={country.cca3}
                className="text-center hover:bg-gray-100 transition duration-300"
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-16 h-10 object-cover inline-block"
                  />
                </td>
                <td className="border border-gray-300 block md:table-cell px-4 py-2">
                  {country.name.common}
                </td>
                <td className="border border-gray-300 block md:table-cell px-4 py-2">
                  {country.formattedPopulation}
                </td>
                <td className="border border-gray-300 block md:table-cell px-4 py-2">
                  {country.cca2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 mb-8">
          <ul className="inline-flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-md border transition ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500 hover:bg-blue-100"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
