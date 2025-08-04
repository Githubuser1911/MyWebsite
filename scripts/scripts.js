function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


window.onscroll = function() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
  } else {
      backToTopButton.style.display = "none";
  }
};

// Smooth scroll back to top
document.getElementById("backToTop").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});