//Footer
import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {currentYear} Country Ranking Population-Mellani Ardiyanti Neorau
      </p>
    </footer>
  )
}

export default Footer
