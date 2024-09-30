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
        } absolute top-16 left-0 right-0 bg-blue-500 md:flex md:items-center md:space-x-8 md:static md:bg-transparent`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-300" : "hover:underline"
            }
            onClick={() => setIsOpen(false)} // Menutup menu saat link diklik
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-300" : "hover:underline"
            }
            onClick={() => setIsOpen(false)} // Menutup menu saat link diklik
          >
            Compare Countries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-300" : "hover:underline"
            }
            onClick={() => setIsOpen(false)} // Menutup menu saat link diklik
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
