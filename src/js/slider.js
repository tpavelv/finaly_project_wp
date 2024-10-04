let sliders = document.querySelectorAll('.slider');

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

for (let i = 0; i < sliders.length; i++) {
  if (sliders[i].querySelector('.slider__swiper-button')) {
    showMoreContent(sliders[i]);
  }
}
