document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Toggle mobile menu (if needed)
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
