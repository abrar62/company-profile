
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(opened));
    menuToggle.setAttribute(
      "aria-label",
      opened ? "Tutup menu" : "Buka menu"
    );
    menuToggle.textContent = opened ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      menuToggle.textContent = "☰";
    });
  });
}

// Tahun copyright otomatis
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
