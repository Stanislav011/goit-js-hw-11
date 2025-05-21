import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');


formEl.addEventListener('submit', e => {
    e.preventDefault();

    clearGallery();

    const query = e.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({
          title: 'Attentione',
          message: 'The field cannot be empty!',
          position: 'topRight'
        });
        return;
      }

    showLoader();

    getImagesByQuery(query)
        .then(data => {
            const images = data.hits;

            if (images.length === 0) {
                iziToast.warning({
                    title: 'Sorry',
                    message: 'There are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 3000,
                });
                return;
            }

            createGallery(images);
            formEl.reset();
        })
        .catch(error => {
            console.error('Помилка при отриманні зображень:', error.message);
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.',
                position: 'topRight',
                timeout: 3000,
            });
        })
        .finally(() => {
            hideLoader();
        });
});