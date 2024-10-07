import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ComparisonPage from "./components/CountryComparison"
import NewsPage from "./pages/NewsPage"
import CountryComparisonForm from "./components/CountryComparisonForm"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound" // Import NotFound page

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/compare" element={<CountryComparisonForm />} />
            <Route
              path="/compare/:page1/n/:page2"
              element={<ComparisonPage />}
            />
            <Route path="/news" element={<NewsPage />} />
            {/* Route for Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
