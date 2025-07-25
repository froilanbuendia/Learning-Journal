const hamburger = document.getElementById("hamburger");
const homeTab = document.getElementById("home-tab");
const aboutTab = document.getElementById("about-tab");
const x = document.getElementById("x");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  homeTab.style.display = "block";
  aboutTab.style.display = "block";
  x.style.display = "block";
});

x.addEventListener("click", () => {
  x.style.display = "none";
  homeTab.style.display = "none";
  aboutTab.style.display = "none";
  hamburger.style.display = "block";
});
