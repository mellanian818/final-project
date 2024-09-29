// src/App.jsx
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ComparisonPage from "./components/CountryComparison"
import NewsPage from "./pages/NewsPage"
import CountryComparisonForm from "./components/CountryComparisonForm"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compare" element={<CountryComparisonForm />} />
        <Route path="/compare/:page1/n/:page2" element={<ComparisonPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  )
}

export default App
