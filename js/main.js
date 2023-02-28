// функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция для генерации случайной строки из заданных предложений
function getRandomDescription() {
  const descriptions = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return descriptions[getRandomNumber(0, descriptions.length - 1)];
}

// функция для генерации случайного имени комментатора
function getRandomName() {
  const names = ['Артём', 'Виктория', 'Глеб', 'Диана', 'Егор', 'Жанна'];
  return names[getRandomNumber(0, names.length - 1)];
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
