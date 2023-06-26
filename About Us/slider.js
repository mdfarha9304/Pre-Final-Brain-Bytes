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