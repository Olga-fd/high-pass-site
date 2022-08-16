"use strict";

function setWidth() {
  const drag = document.querySelector('.swiper-scrollbar-drag');
  const active = document.querySelector('.secondSwiper .swiper-pagination-bullet-active');
  const block1 = document.querySelector('.works1');
  const block2 = document.querySelector('.works2');
  let width = getComputedStyle(active).width;
  drag.style.width = width;

  if (active.innerHTML == 'Услуги по ретуши') {
    drag.style.transform = 'translate3d(283.5px, 0px, 0px)';
    block2.classList.remove('unvisible');
    block1.classList.add('unvisible');

  } else {
    drag.style.transform = 'translate3d(0px, 0px, 0px)';
    block1.classList.remove('unvisible');
    block2.classList.add('unvisible');
  }
}

window.addEventListener('load', setWidth);

document.querySelector('.secondSwiper .swiper-pagination').addEventListener('click', () => {
  setWidth();
})
document.querySelector('.secondSwiper .swiper-scrollbar').addEventListener('click', () => {
  setWidth();
})



