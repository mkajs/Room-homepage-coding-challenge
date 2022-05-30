const closeNav = document.getElementById("close-nav");
const mobileNav = document.getElementById("mobile-nav");
const openNav = document.getElementById("open-nav");
const leftSlider = document.getElementById("left-slide");
const buttonLeft = document.getElementById("left-button");
const buttonRight = document.getElementById("right-button");
const rightSlider = document.getElementById("right-slide");

// hanlde navbar

const handleNavbar = function () {
  openNav.parentElement.classList.toggle("flex");
  openNav.parentElement.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
  mobileNav.classList.toggle("flex");
};

openNav.addEventListener("click", function (e) {
  e.preventDefault();
  handleNavbar();
});

closeNav.addEventListener("click", function (e) {
  e.preventDefault();
  handleNavbar();
});

// hanlde sliders

let currentSlide = 0;

buttonRight.addEventListener("click", function (e) {
  e.preventDefault();
  if (-currentSlide === rightSlider.childElementCount - 1) return;

  let rightCounter = currentSlide;
  let leftCounter = currentSlide;
  currentSlide--;
  // move right slides to left
  for (const slide of rightSlider.children) {
    slide.style.transform = "translateX(" + (rightCounter * 100 - 100) + "%)";
    rightCounter++;
  }
  // move left slides to left
  for (const slide of leftSlider.children) {
    slide.style.transform = "translateX(" + (leftCounter * 100 - 100) + "%)";
    leftCounter++;
  }
});

buttonLeft.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentSlide === 0) return;

  let rightCounter = currentSlide;
  let leftCounter = currentSlide;
  currentSlide++;
  // move right slides to right
  for (const slide of rightSlider.children) {
    slide.style.transform = "translateX(" + (rightCounter * 100 + 100) + "%)";
    rightCounter++;
  }
  // move left slides to right
  for (const slide of leftSlider.children) {
    slide.style.transform = "translateX(" + (leftCounter * 100 + 100) + "%)";
    leftCounter++;
  }
});
