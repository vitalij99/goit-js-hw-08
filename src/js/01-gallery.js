// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.getElementsByClassName("gallery")[0]


createImages(galleryItems)


function createImages(e) {
   const images = e.reduce ((arr,{ preview, original, description }) => {
       return arr + `<a class="gallery__item" href="${original}"><img class="gallery__image"
      src="${preview}" alt="${description}"/></a> ` 
   },"")
    gallery.insertAdjacentHTML('beforeend', images)    
}
const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: "alt",
    captionDelay:250,
});