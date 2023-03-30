/* eslint-disable no-unused-vars */
/*
    Импорты других модулей
    Вызовы общих функций
    Настройка скриптов
    ...
*/
import './data.js';
import './utils.js';
import './arrays.js';
import './bigPicture.js';
import './drawing.js';
import './forms.js';
import './scale.js';
import './effects.js';
import { setOnFormSubmit, hideModal } from './forms.js';
import { getData, sendData } from './server.js';
import { showSuccessMessage, showErrorMessage } from './utils.js';
import { createPhotoElements } from './drawing.js';
import { showAlert } from './utils.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  createPhotoElements(data);
} catch (err) {
  showAlert(err.message);
}


