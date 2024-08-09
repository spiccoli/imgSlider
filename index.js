const slides = document.querySelectorAll(".slides img");
const autoSlideBtn = document.getElementById("autoSlideBtn");

let slideIndex = 0;
let intervalId = null;
let autoSlideBoolean = true;

document.addEventListener("DOMContentLoaded", initializeAutoSlider);

function initializeAutoSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    if (autoSlideBoolean) intervalId = setInterval(forward, 5000);
    if (autoSlideBoolean) {
        autoSlideBtn.innerHTML = 'Auto slider <span style="color: green;">ON</span>/OFF';
      } else {
        autoSlideBtn.innerHTML = 'Auto slider ON/<span style="color: red;">OFF</span>';
      }
  }
}

function autoSlider() {
  clearInterval(intervalId);
  autoSlideBoolean = !autoSlideBoolean;

  if (autoSlideBoolean) {
    autoSlideBtn.innerHTML =
      'Auto slider <span style="color: green;">ON</span>/OFF';
  } else {
    autoSlideBtn.innerHTML =
      'Auto slider ON/<span style="color: red;">OFF</span>';
  }

  initializeAutoSlider();//reinitializing will check by itself if it is true autoSlider
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function back() {
  clearInterval(intervalId)
  if (autoSlideBoolean) intervalId = setInterval(forward, 5000);
  slideIndex--;
  showSlide(slideIndex);
}

function forward() {
  clearInterval(intervalId)
  if (autoSlideBoolean) intervalId = setInterval(forward, 5000);
  slideIndex++;
  showSlide(slideIndex);
}
