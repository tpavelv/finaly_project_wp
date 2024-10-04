// main
let buttonShowMoreText = document.querySelector('.main__content-button');
let mainParagraph = document.querySelector('.main__content-paragraph');
// header
let openMenuButton = document.querySelector('.header__menu-button--burger');
let callButtons = document.querySelectorAll('.button--call');
let chatButtons = document.querySelectorAll('.button--chat');

// menu
let menu = document.querySelector('.main__side-menu');
let body = document.querySelector('body');
let mobileMenu = document.querySelector('.mobile-menu-wrapper');
let closeButtonMobileMenu = mobileMenu.querySelector(
  '.mobile-menu__button--close'
);
// modal
let modalCall = document.querySelector('.modall-form--call');
let modalChat = document.querySelector('.modall-form--chat');
let buttonCloseCall = modalCall.querySelector('.modal-form__button--close');
let buttonCloseChat = modalChat.querySelector('.modal-form__button--close');
// sliders
let sliders = document.querySelectorAll('.slider');

buttonShowMoreText.addEventListener('click', function (evt) {
  console.log(evt.target.textContent);
  if (evt.target.textContent == 'Читать далее') {
    mainParagraph.classList.add('showMoreText');
    buttonShowMoreText.textContent = 'Свернуть';
    buttonShowMoreText.classList.add('button_icon--rotate');
  } else {
    mainParagraph.classList.remove('showMoreText');
    buttonShowMoreText.textContent = 'Читать далее';
    buttonShowMoreText.classList.remove('button_icon--rotate');
  }
});

const mySwiper = new Swiper('.slider__swiper', {
  slidesPerView: 'auto',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: { enabled: true },
    768: { enabled: false }
  }
});

let showMoreContent = function (elem) {
  let wrapperSlider = elem.querySelector('.slider__swiper-wrapper');
  let sliderButtonMore = elem.querySelector('.slider__swiper-button');

  sliderButtonMore.addEventListener('click', function () {
    if (elem.classList.contains('slider--larger')) {
      elem.classList.remove('slider--larger');
      wrapperSlider.classList.remove('slider__swiper-wrapper--larger');
      sliderButtonMore.classList.remove('button__icon--rotate');
      sliderButtonMore.textContent = 'Показать все';
    } else {
      elem.classList.add('slider--larger');
      wrapperSlider.classList.add('slider__swiper-wrapper--larger');
      sliderButtonMore.classList.add('button__icon--rotate');

      sliderButtonMore.textContent = 'Скрыть';
    }
  });
};

// modal
let showCallModal = function (buttonItem) {
  buttonItem.addEventListener('click', function () {
    modalCall.style.display = 'block';
    body.style.overflow = 'hidden';
  });
};

let showChatModal = function (buttonItem) {
  buttonItem.addEventListener('click', function () {
    modalChat.style.display = 'block';
    body.style.overflow = 'hidden';
  });
};
let closeCallModal = function (buttonItem) {
  buttonItem.addEventListener('click', function () {
    modalCall.style.display = 'none';
    body.style.overflow = 'auto';
  });
};

let closeChatModal = function (buttonItem) {
  buttonItem.addEventListener('click', function () {
    modalChat.style.display = 'none';
    body.style.overflow = 'auto';
  });
};

for (let i = 0; i < sliders.length; i++) {
  if (sliders[i].querySelector('.slider__swiper-button')) {
    showMoreContent(sliders[i]);
  }
}

for (let i = 0; i < callButtons.length; i++) {
  showCallModal(callButtons[i]);
}
for (let i = 0; i < chatButtons.length; i++) {
  showChatModal(chatButtons[i]);
}
for (let i = 0; i < chatButtons.length; i++) {
  showChatModal(chatButtons[i]);
}
buttonCloseCall.addEventListener('click', function () {
  modalCall.style.display = 'none';
});
buttonCloseChat.addEventListener('click', function () {
  modalChat.style.display = 'none';
});

// header
openMenuButton.addEventListener('click', function () {
  menu.style.display = 'block';
  body.style.overflow = 'hidden';
});

//mobileMenu
mobileMenu.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('mobile-menu-wrapper')) {
    menu.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

closeButtonMobileMenu.addEventListener('click', function () {
  menu.style.display = 'none';
  body.style.overflow = 'auto';
});
