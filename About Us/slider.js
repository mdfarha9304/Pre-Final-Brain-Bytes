'use strict';
const sliderContainer = document.querySelector('.slider-container');
const sliderBtnLeft = document.querySelector('.slider-btn.left');
const sliderBtnRight = document.querySelector('.slider-btn.right');
let currentSlide = 0;

sliderBtnLeft.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});

sliderBtnRight.addEventListener('click', () => {
  const slideCount = sliderContainer.childElementCount;
  if (currentSlide < slideCount - 1) {
    currentSlide++;
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});
/* nav Bar  */

const hamburgerNavigation = document.querySelector('.hidden');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerNavigation.className == 'hidden') {
    hamburgerNavigation.classList.remove('hidden');
  } else {
    hamburgerNavigation.classList.add('hidden');
  }
});
