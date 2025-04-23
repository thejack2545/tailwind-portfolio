// tailwind.config.js
export default {
    darkMode: 'class',  // เปิดใช้งาน dark mode โดยใช้ class
    content: [
      "./portfolio/index.html",  // เส้นทางของ index.html
      "./portfolio/**/*.{js,ts,jsx,tsx}"  // ครอบคลุมทุกไฟล์ที่ใช้ Tailwind ภายในโฟลเดอร์ portfolio
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  