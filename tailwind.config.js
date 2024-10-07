/** @type {import('tailwindcss').Config} */
export default {
  // Mengidentifikasi semua file di mana Tailwind akan digunakan
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Mengaktifkan mode gelap menggunakan class
  darkMode: "class", // Bisa diubah menjadi 'media' untuk mendeteksi preferensi sistem

  theme: {
    // Memperluas tema default Tailwind
    extend: {
      colors: {
        // Warna khusus untuk dark mode
        darkBackground: "#1a202c", // Warna latar belakang mode gelap
        darkText: "#e2e8f0", // Warna teks mode gelap
        lightBackground: "#f7fafc", // Warna latar belakang mode terang
        lightText: "#2d3748", // Warna teks mode terang
      },
    },
  },

  // Menambahkan plugin tambahan jika diperlukan
  plugins: [],
}
