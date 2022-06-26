// Add imports above this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import { refs } from './refs';
// Change code below this line
const gallery = newGallery(galleryItems);
refs.galleryContainer.insertAdjacentHTML('afterbegin', gallery);

function newGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
}

new simpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

console.log(galleryItems);
