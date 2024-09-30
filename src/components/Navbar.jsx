// src/components/Navbar.jsx
import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between relative">
      <a href="/" className="text-lg font-bold">
        Country Rank Population
      </a>
      {/* Tombol Hamburger untuk tampilan mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Menu Navigasi */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-8 absolute top-full left-0 w-full md:static md:w-auto bg-blue-500 md:bg-transparent z-10 text-center`}
      >
        <li className="w-full md:w-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 md:inline-block underline text-yellow-300"
                : "block py-2 md:inline-block hover:bg-blue-600 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li className="w-full md:w-auto">
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              isActive
                ? "block py-2 md:inline-block underline text-yellow-300"
                : "block py-2 md:inline-block hover:bg-blue-600 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
            }
            onClick={() => setIsOpen(false)}
          >
            Compare Countries
          </NavLink>
        </li>
        <li className="w-full md:w-auto">
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "block py-2 md:inline-block underline text-yellow-300"
                : "block py-2 md:inline-block hover:bg-blue-600 md:hover:bg-transparent md:hover:text-gray-300 transition-colors duration-300"
            }
            onClick={() => setIsOpen(false)}
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
