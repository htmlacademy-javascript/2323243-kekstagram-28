import { getRandomNumber } from './data.js';
import { generateComment } from './data.js';
import { generatePhoto } from './data.js';

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

export {getRandomDescription};
export {getRandomName};

