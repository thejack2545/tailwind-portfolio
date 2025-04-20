// ฟังก์ชันเปิด/ปิด dark mode
function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById("theme-toggle").querySelector("i");
  
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
  
    // บันทึกธีมไว้ใน LocalStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  
    // เปลี่ยนไอคอน
    icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }
  
  // โหลดค่าธีมตอนเริ่มต้น
  window.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("theme-toggle").querySelector("i");
    const html = document.documentElement;
  
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      icon.className = "fas fa-sun";
    } else {
      html.classList.remove("dark");
      icon.className = "fas fa-moon";
    }
  
    // ผูก event ให้ปุ่ม
    document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);
  });
  