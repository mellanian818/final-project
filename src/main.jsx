import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Membungkus aplikasi dengan Provider */}
      <App />
    </Provider>
  </React.StrictMode>
)
