import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../store/countrySlice"
import loadingMap from "../assets/loading-cargando.gif" // Ganti dengan path gambar loading Anda

//state management untuk ngambil data
const LandingPage = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries.data || [])
  const [currentPage, setCurrentPage] = useState(1)
  const [countryPerPage] = useState(25)
  const [loading, setLoading] = useState(true) // State untuk loading

  useEffect(() => {
    dispatch(fetchCountries()).then(() => setLoading(false)) // Set loading false setelah data di-fetch
  }, [dispatch])

  // Hitung index dari negara yang ditampilkan di setiap halaman
  const indexOfLastCountry = currentPage * countryPerPage
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage
  const currentCountry = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  // Ganti halaman/ubah halaman yang aktif ketika pagination di klik
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Hitung jumlah halaman yang diperlukan
  const totalPages = Math.ceil(countries.length / countryPerPage)

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto overflow-x-auto">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Country Rankings
        </h1>

        {loading ? (
          // Gambar animasi loading
          <div className="flex justify-center items-center h-64">
            <img src={loadingMap} alt="Loading Map..." className="w-64 h-64" />
          </div>
        ) : (
          <>
            {/* Tabel untuk layar besar */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full table-auto border-collapse bg-white shadow-lg">
                <thead>
                  <tr className="border border-gray-300">
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      Flag
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      Name
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                      Population
                    </th>
                    <th className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
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
                          className="w-12 h-8 sm:w-16 sm:h-10 object-cover mx-auto"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {country.name.common}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {country.formattedPopulation}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {country.cca2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Daftar responsif untuk layar kecil */}
            <div className="block md:hidden">
              {currentCountry.map((country) => (
                <div
                  key={country.cca3}
                  className="border border-gray-300 mb-4 p-4 rounded-md bg-white shadow-md"
                >
                  <div className="flex items-center">
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      className="w-12 h-8 sm:w-16 sm:h-10 object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{country.name.common}</h3>
                      <p>Population: {country.formattedPopulation}</p>
                      <p>Code: {country.cca2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 mb-8">
              <ul className="inline-flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md border transition ${
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
          </>
        )}
      </div>
    </div>
  )
}

export default LandingPage
