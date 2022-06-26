import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const gallery = newGallery(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", gallery);


function newGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join("");
}

new SimpleLightbox('.gallery a', {  captionDelay: 250, captionsData: "alt"});

console.log(galleryItems);
