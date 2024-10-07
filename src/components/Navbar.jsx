import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-900 border-gray-200 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          {/* <img src="/logo.svg" className="h-8" alt="Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Country Rank Population
          </span>
        </a>
        {/* Burger button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${isOpen ? "text-white" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto bg-blue-900`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-yellow-500 rounded-full"
                    : "block py-2 px-3 text-white hover:bg-blue-800"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/compare"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-yellow-500 rounded-full"
                    : "block py-2 px-3 text-white hover:bg-blue-800"
                }
              >
                Compare Countries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-white bg-yellow-500 rounded-full"
                    : "block py-2 px-3 text-white hover:bg-blue-800"
                }
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
