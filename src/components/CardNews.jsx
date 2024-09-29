//Card Component

// src/components/CardNews.jsx
import React from "react"

const CardNews = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`https://www.nytimes.com/${article.multimedia?.[0]?.url}`}
        alt={article.headline.main}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {article.headline.main}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{article.abstract}</p>
      </div>
    </div>
  )
}

export default CardNews
