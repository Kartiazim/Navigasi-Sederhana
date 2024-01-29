const tombol = document.querySelector("input");
const navigasi = document.querySelector("nav ul");

tombol.addEventListener("click", function () {
  navigasi.classList.toggle("slide");
});
