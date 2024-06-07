document.querySelector("h3").addEventListener("mouseover", () => {
  document.querySelector(".container").classList.add("active");
});
document.querySelector("h3").addEventListener("mouseout", () => {
  document.querySelector(".container").classList.remove("active");
});
