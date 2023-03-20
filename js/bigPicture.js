function showBigPicture(photo) {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = photo.url;

  const likesCountElement = bigPicture.querySelector('.likes-count');
  likesCountElement.textContent = photo.likes;

  const commentsCountElement = bigPicture.querySelector('.comments-count');
  commentsCountElement.textContent = photo.comments.length;

  const descriptionElement = bigPicture.querySelector('.social__caption');
  descriptionElement.textContent = photo.description;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';

  photo.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarElement = document.createElement('img');
    avatarElement.classList.add('social__picture');
    avatarElement.src = comment.avatar;
    avatarElement.alt = comment.name;
    avatarElement.width = 35;
    avatarElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = comment.message;

    commentElement.appendChild(avatarElement);
    commentElement.appendChild(textElement);
    commentsList.appendChild(commentElement);
  });

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscPress);

  function onEscPress(evt) {
    if (evt.key === 'Escape') {
      hideBigPicture();
    }
  }

  function hideBigPicture() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscPress);
  }
}

export {showBigPicture};
