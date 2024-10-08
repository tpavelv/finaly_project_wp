import body from './menu.js';
let modalCall = document.querySelector('.modall-form--call');
let modalChat = document.querySelector('.modall-form--chat');

let callButtons = document.querySelectorAll('.button--call');
let chatButtons = document.querySelectorAll('.button--chat');
let closeButtons = document.querySelectorAll('.modal-form__button--close');

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
let closeModal = function (buttonItem) {
  buttonItem.addEventListener('click', function () {
    if ((modalCall.style.display = 'block')) {
      modalCall.style.display = 'none';
    }
    if ((modalChat.style.display = 'block')) {
      modalChat.style.display = 'none';
    }
    body.style.overflow = 'auto';
  });
};

for (let i = 0; i < callButtons.length; i++) {
  showCallModal(callButtons[i]);
}
for (let i = 0; i < chatButtons.length; i++) {
  showChatModal(chatButtons[i]);
}
for (let i = 0; i < closeButtons.length; i++) {
  closeModal(closeButtons[i]);
}

modalCall.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('modal-form')) {
    modalCall.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

modalChat.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('modal-form')) {
    modalChat.style.display = 'none';
    body.style.overflow = 'auto';
  }
});
