import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector('gallery');

galleryDiv.addEventListener('click', onClick);

function onClick(event) {
//     if(event.target.nodeName !== 'img')
//     return;    
}
console.log(event.nodeName);