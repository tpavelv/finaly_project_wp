let buttonShowMoreText = document.querySelector('.main__content-button');
let mainParagraph = document.querySelector('.main__content-paragraph');

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
