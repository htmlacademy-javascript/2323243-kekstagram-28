import { getRandomDescription } from './arrays';
import { getRandomName } from './arrays';

// функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция для генерации объекта комментария
function generateComment(id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomDescription(),
    name: getRandomName()
  };
}

// функция для генерации объекта фотографии
function generatePhoto(id) {
  const commentsCount = getRandomNumber(1, 5); // генерируем случайное количество комментариев
  const comments = [];
  // генерируем каждый комментарий и добавляем в массив комментариев
  for (let i = 1; i <= commentsCount; i++) {
    comments.push(generateComment(i));
  }
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomDescription(),
    likes: getRandomNumber(15, 200),
    comments: comments
  };
}

// функция для создания массива фотографий
function generatePhotosArray() {
  const photos = [];
  // генерируем каждую фотографию и добавляем в массив фотографий
  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
}

export {getRandomNumber};
export {generatePhoto};
export {generateComment};
export {generatePhotosArray};
