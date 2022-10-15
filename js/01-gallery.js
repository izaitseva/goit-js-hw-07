import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
    })
    .join("");
}

galleryRef.addEventListener('click', onGalleryRefClick);

let modalWindow;

function onKeydownEscape(event) {
  if (event.key === 'Escape') {
    modalWindow.close();
  }
}

function onGalleryRefClick(event) {
  event.preventDefault();

  const isGalleryRef = event.target.classList.contains('gallery__image');

  if (!isGalleryRef) {
    return
  }

  modalWindow = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onClose: () => {
        document.removeEventListener("keydown", onKeydownEscape);
      }
    }
  )
  modalWindow.show();

  document.addEventListener("keydown", onKeydownEscape);

  console.log(event.target.dataset);
}
