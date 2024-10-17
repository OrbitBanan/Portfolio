document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {}
      });
  });

  sections.forEach(section => {
      observer.observe(section);
  });
});