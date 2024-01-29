let currentSlide = 0,
  slides = document.querySelector(".slider"),
  radioButtons = document.querySelectorAll(".radio"),
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }, 10000);

function showSlide(index) {
  currentSlide = index;
  slides.style.transform = `translateX(${-index * 100}%)`;
  updateRadioButtons();
}

function changeSlide(index) {
  showSlide(index);
  resetInterval();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 10000);
}

function updateRadioButtons() {
  radioButtons.forEach(
    (radio, index) => (radio.checked = index === currentSlide)
  );
}

radioButtons.forEach((radio, index) =>
  radio.addEventListener("click", () => changeSlide(index))
);

function goToAboutSlide() {
  resetInterval();
  changeSlide(0); // Go back to the slide About
}
