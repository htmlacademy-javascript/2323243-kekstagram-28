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
