// src/components/Navbar.jsx
import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between">
      <a href="/" className="text-lg font-bold">
        Country Rank Population
      </a>
      <ul className="flex space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-300" : "hover:underline"
            }
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
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
