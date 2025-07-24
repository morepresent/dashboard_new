const menuBtnEl = document.getElementById("menuBtn");
const navEl = document.getElementById("menu");
const goBackEl = document.getElementById("goBackBtn");

menuBtnEl.addEventListener("click", () => {
  navEl.classList.remove("hidden");
});

goBackEl.addEventListener("click", () => {
  navEl.classList.add("hidden");
});
