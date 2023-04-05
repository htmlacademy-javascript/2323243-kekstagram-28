import { showBigPicture } from './big-picture.js';
import { getData } from './server.js';
import { getFilteredPictures } from './filter.js';


let photos = [];

function createPhotoElements() {
  // находим контейнер для фотографий
  const picturesContainer = document.querySelector('.pictures');

  // удаляем старые фото
  const oldPictures = picturesContainer.querySelectorAll('.picture');
  oldPictures.forEach((picture) => picture.remove());

  // добавляем отфильтрованные фото
  const filteredPictures = getFilteredPictures();

  getData().then((data) => {
    photos = data;

    const picturesFragment = document.createDocumentFragment();

    // находим шаблон
    const pictureTemplate = document.querySelector('#picture');

    filteredPictures.forEach((photo) => {
      // клонируем шаблон
      const pictureElement = pictureTemplate.content.firstElementChild.cloneNode(true);
      pictureElement.dataset.index = photo.id;

      const pictureImg = pictureElement.querySelector('.picture__img');
      const pictureLikes = pictureElement.querySelector('.picture__likes');
      const pictureComments = pictureElement.querySelector('.picture__comments');

      // заполняем элементы данными из объекта фотографии
      pictureImg.src = photo.url;
      pictureLikes.textContent = photo.likes;
      pictureComments.textContent = photo.comments.length;

      picturesFragment.appendChild(pictureElement);
    });

    // вставляем фрагмент со всеми заполненными элементами в контейнер
    picturesContainer.appendChild(picturesFragment);
  });

  function onPictureClick(evt) {
    const target = evt.target.closest('.picture');
    if (target) {
      const index = target.dataset.index;
      const photo = photos[index];
      showBigPicture(photo);
    }
  }

  picturesContainer.addEventListener('click', onPictureClick);
}

export { createPhotoElements };


