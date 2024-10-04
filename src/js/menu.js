let menu = document.querySelector('.main__side-menu');
const body = document.querySelector('body');
export default body;
let mobileMenu = document.querySelector('.mobile-menu-wrapper');
let closeButtonMobileMenu = mobileMenu.querySelector(
  '.mobile-menu__button--close'
);
let openMenuButton = document.querySelector('.header__menu-button--burger');

openMenuButton.addEventListener('click', function () {
  menu.style.display = 'block';
  body.style.overflow = 'hidden';
});

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
