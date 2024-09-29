import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.nytimes.com", // URL API New York Times
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Menghapus prefix '/api'
      },
    },
  },
})
