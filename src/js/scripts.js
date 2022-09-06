"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.querySelector('.secondSwiper .swiper-pagination');
  const scrollbar = document.querySelector('.secondSwiper .swiper-scrollbar');
  const label = document.querySelector('.label');
  const mainForms = document.querySelectorAll('.main__form');
  const btnClose = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');
  const info = document.querySelector('.info');
  const header = document.querySelector('.contacts');
  const inputsEmail = document.querySelectorAll('.send-email')
  const nameInput = document.getElementById('name');
  const labelName = document.getElementById('name').nextElementSibling;
  const sendInput = document.getElementById('send');
  const labelSend = document.getElementById('send').nextElementSibling;
  const mailInput = document.getElementById('email');
  const labelMail = document.getElementById('email').nextElementSibling;
  const close1 = btnClose.cloneNode(true);
  const close2 = btnClose.cloneNode(true);

  function setWidth() {
    const drag = document.querySelector('.swiper-scrollbar-drag');
    const active = document.querySelector('.secondSwiper .swiper-pagination-bullet-active');
    const block1 = document.querySelector('.works1');
    const block2 = document.querySelector('.works2');
    let width = getComputedStyle(active).width;
    drag.style.width = width;
    scrollbar.style.width = `${pagination.clientWidth}px`;

    if (active.innerHTML == 'Услуги по ретуши') {
      if (window.innerWidth > 430) {
        drag.style.transform = 'translate3d(283.5px, 0px, 0px)';
      }

      block2.classList.remove('unvisible');
      block1.classList.add('unvisible');

    } else {
      drag.style.transform = 'translate3d(0px, 0px, 0px)';
      block1.classList.remove('unvisible');
      block2.classList.add('unvisible');
    }
  }

  function showText() {
    if (document.querySelector('.anima-right')) {
      info.style.opacity = 1;
      btnClose.style.opacity = 1;
    } else if (document.querySelector('.anima-left')) {
      info.style.opacity = 0;
      btnClose.style.opacity = 0;
    }
  }

  function checkEmail(e) {
    let labelEmail;
    let email = e.target.value;
    var regExp = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;

    if (e.target.id == 'email') {
      labelEmail = labelMail;
    } else {
      labelEmail = labelSend;
    }

    if (email.length == 0 || !regExp.test(email)) {
        labelEmail.textContent = 'Недопустимый формат';
      } else {
        labelEmail.textContent = '';
      }
  }

  function checkName() {
    const name = document.getElementById('name').value;
    const labelName = document.getElementById('name').nextElementSibling;
    const regExp = /^[a-zA-Z0-9\s?!*\/,.]+$/;
    if (regExp.test(name) || name.length == 0) {
      labelName.textContent = 'Недопустимый формат';
    } else {
      labelName.textContent = '';
    }
  }

  function openFormSearch() {
    const input = document.querySelectorAll('.header__form')[0];

    try {
      input.style.width = '169px';
      if ( document.querySelector('.header__form .close')) {
        close1.style.opacity = 1;
      } else {
        input.append(close1);
      }

      close1.addEventListener('click', (e) => {
        e.preventDefault();
        close1.style.opacity = '0';
        input.style.width = '0';
      })
    } catch {
      throw new TypeError('Что-то пошло не так')
    };
  }

  function openMenu() {
    const menu = document.querySelectorAll('.header__nav')[1];

    try {
      if (document.querySelector('.header__nav .close')) {
        close2.style.opacity = 1;
      } else {
        menu.append(close2)
      }

      menu.style.display = 'block';
      close2.addEventListener('click', (e) => {
        e.preventDefault();
        close2.style.opacity = '0';
        menu.style.display = 'none';
      })
    } catch {
      throw new TypeError('Что-то пошло не так')
    };
  }

  function changeOrder() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.header__nav');
    const search = document.querySelector('.contacts-wrap');
    const copyNav = nav.cloneNode(true);
    const copySearch = search.cloneNode(true);

    header.append(copyNav);
    menu.append(copySearch);
    copyNav.style.color = '#ffffff';
    copyNav.style.width = '100%';
  }

  if ( window.innerWidth <= 769 ) {
    changeOrder();
    setWidth();
    const btn = document.querySelectorAll('.header__btn')[0];
    btn.addEventListener('click', openFormSearch)
  }

  if ( window.innerWidth <= 430 ) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelectorAll('.header__nav')[1];
    menu.append(close2)
    setWidth()
    burger.addEventListener('click', openMenu);
  }

  pagination.addEventListener('click', () => {
    setWidth();
  });

  scrollbar.addEventListener('click', () => {
    setWidth();
  });

  label.addEventListener('click', () => {
    if ( window.innerWidth <= 430 ) {
      overlay.style.height = '50%';
    } else if ( window.innerWidth <= 1024 ) {
      overlay.style.height = '34%';
    } else {
      overlay.style.width = '48%';
    }

    overlay.classList.remove('anima-left');
    overlay.classList.add('anima-right');
  });

  btnClose.addEventListener('click', () => {
    info.style.opacity = 0;
    btnClose.style.opacity = 0;
    if ( window.innerWidth <= 1024 ) {
      overlay.style.height = 0;
    } else {
      overlay.style.width = 0
    }
    overlay.classList.remove('anima-right');
    overlay.classList.add('anima-left');
  });

  overlay.addEventListener('transitionend',  function() {
    showText()
  });

  mainForms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    sendInput.value = '';
    alert('Отправлено');
    let submit = mainForms[0].querySelector('.main__btn');
    submit.setAttribute('disabled', 'disabled')
  })

  mainForms[1].addEventListener('submit', (e) => {
    e.preventDefault();
    let submit = mainForms[1].querySelector('.main__btn');
    nameInput.value = '';
    mailInput.value = '';
    alert('Отправлено');
    submit.setAttribute('disabled', 'disabled')
  })

  inputsEmail.forEach(inputEmail => {
    inputEmail.addEventListener('input', (e) => {
      checkEmail(e);
      if (e.target.id == 'send' && labelSend.innerText != 'Недопустимый формат') {
        let submit = mainForms[0].querySelector('.main__btn');
        submit.removeAttribute('disabled')
      } else if (e.target.id == 'email' && labelName.innerText != 'Недопустимый формат' && labelMail.innerText != 'Недопустимый формат' && nameInput.value.length > 2) {
        let submit = mainForms[1].querySelector('.main__btn');
        submit.removeAttribute('disabled')
      }
    });

    inputEmail.addEventListener('focus', (e) => {
      e.target.nextElementSibling.textContent = '';
    })
  })

  nameInput.addEventListener('focus', (e) => {
    e.target.nextElementSibling.textContent = '';
  })

  nameInput.addEventListener('input', (e) => {
    checkName()
    let submit = mainForms[1].querySelector('.main__btn');
    if (labelName.innerText != 'Недопустимый формат' && labelMail.innerText != 'Недопустимый формат' && mailInput.value.length > 6) {
      submit.removeAttribute('disabled')
    }
  })
})

