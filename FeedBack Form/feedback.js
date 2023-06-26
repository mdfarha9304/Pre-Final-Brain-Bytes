'use strict';
const allStar = document.querySelectorAll('.rating .star');

allStar.forEach((item, idx) => {
  item.addEventListener('click', function () {
    allStar.forEach((i) => {
      i.classList.replace('bxs-star', 'bx-star');
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace('bx-star', 'bxs-star');
      }
    }
  });
});

/* For Hamburger menu */

const hamburgerNavigation = document.querySelector('.hidden');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerNavigation.className == 'hidden') {
    hamburgerNavigation.classList.remove('hidden');
  } else {
    hamburgerNavigation.classList.add('hidden');
  }
});
