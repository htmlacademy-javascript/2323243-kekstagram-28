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
import { showAlert, showSuccessMessage, showErrorMessage, debounce } from './utils.js';
import { createPhotoElements } from './drawing.js';
import { init, getFilteredPictures } from './filter.js';

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
  const debounceRenderGallery = debounce(createPhotoElements);
  init(data,debounceRenderGallery);
  createPhotoElements(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}


