import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
          
            <a class="gallery__item" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
        `;
        })
        .join("");
}


console.log(galleryItems);
