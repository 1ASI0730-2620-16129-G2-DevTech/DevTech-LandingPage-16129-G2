// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-Horizontal");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");

});
