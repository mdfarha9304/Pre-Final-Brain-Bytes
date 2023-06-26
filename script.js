'use strict';
const hamburgerNavigation = document.querySelector('.hidden');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerNavigation.className == 'hidden') {
    hamburgerNavigation.classList.remove('hidden');
  } else {
    hamburgerNavigation.classList.add('hidden');
  }
});

// slider script
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

//Slider script ends here

// Login popup starts here

// Write review button

const reviewButton = document.querySelector('.my-button');
reviewButton.addEventListener('click', () => {
  window.location.href = '/FeedBack Form/Feedback.html';
});
