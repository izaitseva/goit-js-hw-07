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

onOpenModalRef.addEventListener('click', onOpenModal);
onCloseModalRef.addEventListener('click', onCloseModal);
onBackdropClickRef.addEventListener('click', onBackdropClick);

function onOpenModal() {
    modalWindow.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
  modalWindow.removeEventListener('keydown', onEscKeyPress);
}

function onBackdropClick(event) {
  if(event.currentTarget === event.target) {
    console.log(event);
  }
}

function onGalleryRefClick(event) {
    event.preventDefault();

    const isGalleryRef = event.target.classList.contains('gallery__image');

    if (!isGalleryRef) {
        return
    }

    modalWindow = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`
    )
    modalWindow.show();
    console.log(event.target.dataset);
}

function onEscKeyPress(event) {
  console.log(event);
}