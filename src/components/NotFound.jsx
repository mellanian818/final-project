import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound
