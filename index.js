const header = document.querySelector("header");
const hamBurgerButton = document.querySelector(".hamburger-icon");
const close = document.querySelector(".close-icon");

hamBurgerButton.addEventListener("click", () => {
  header.classList.add("expanded");
});

close.addEventListener("click", () => {
  header.classList.remove("expanded");
});
