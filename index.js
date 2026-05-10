document.addEventListener("DOMContentLoaded", () => {

    /* ── MOBILE TOGGLE ── */
    const toggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    if (toggle && navMenu) {
  
      toggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
      });
  
      // Close menu when a link is clicked
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
        });
      });
  
      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
          navMenu.classList.remove("open");
        }
      });
  
    }
  
    /* ── ACTIVE PAGE HIGHLIGHT ── */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  
  });