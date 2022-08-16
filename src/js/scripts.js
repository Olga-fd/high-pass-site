function setWidth() {
  const drag = document.querySelector('.swiper-scrollbar-drag');
  const active = document.querySelector('.secondSwiper .swiper-pagination-bullet-active');
  let width = getComputedStyle(active).width;
  drag.style.width = width;

  if (active.innerHTML == 'Услуги по ретуши') {
    drag.style.transform = 'translate3d(283.5px, 0px, 0px)';
  } else {
    drag.style.transform = 'translate3d(0px, 0px, 0px)';
  }
}

window.addEventListener('load', setWidth);

document.querySelector('.secondSwiper .swiper-pagination').addEventListener('click', () => {
  setWidth();
})
document.querySelector('.secondSwiper .swiper-scrollbar').addEventListener('click', () => {
  setWidth();
})

// document.querySelector('.secondSwiper .content2').addEventListener('slide', () => {
//   setWidth();
// })

