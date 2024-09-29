// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../store/newsSlice"
import loadingMap from "../assets/loading-cargando.gif" // Import animasi atau gambar loading

const NewsPage = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.news.articles)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch news data and handle loading state
    const fetchData = async () => {
      setLoading(true)
      await dispatch(fetchNews())
      setLoading(false)
    }

    fetchData()
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Latest News and Articles
      </h1>

      {loading ? (
        // Gambar animasi loading map
        <div className="flex justify-center items-center h-64">
          <img src={loadingMap} alt="Loading Map..." className="w-64 h-64" />
        </div>
      ) : (
        // News articles grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <div
              key={article.url}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {article.multimedia?.[0]?.url && (
                <img
                  src={"https://static01.nyt.com/" + article.multimedia[0].url}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <a
                  href={article.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xl font-semibold"
                >
                  {article.headline.main}
                </a>
                <p className="text-gray-700 mt-2 line-clamp-3">
                  {article.abstract}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsPage
