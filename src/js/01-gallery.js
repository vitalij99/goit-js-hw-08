// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const image = galleryItems
  .map(
    i =>
      `<a class="gallery__link" href="${i.original}">
    <img class="gallery__image" 
    src="${i.preview}" 
    alt="${i.description}"
    "/>
        </a>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', image);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
