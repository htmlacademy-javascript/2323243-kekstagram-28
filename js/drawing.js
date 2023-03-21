import {generatePhotosArray} from './data.js';
import {showBigPicture} from './bigPicture.js';

function createPhotoElements() {
  const photos = generatePhotosArray();

  const picturesContainer = document.querySelector('.pictures');
  const picturesFragment = document.createDocumentFragment();

  const pictureTemplate = document.querySelector('#picture');

  photos.forEach((photo) => {
    const pictureElement = pictureTemplate.content.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');
    const pictureLikes = pictureElement.querySelector('.picture__likes');
    const pictureComments = pictureElement.querySelector('.picture__comments');

    pictureImg.src = photo.url;
    pictureLikes.textContent = photo.likes;
    pictureComments.textContent = photo.comments;

    picturesFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesFragment);

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

export {createPhotoElements};

