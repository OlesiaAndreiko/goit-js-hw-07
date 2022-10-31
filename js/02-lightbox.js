import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallaryImges = document.querySelector('.gallery');
const markupGallary = createMarkupImges(galleryItems);
gallaryImges.insertAdjacentHTML('beforeend', markupGallary)


function createMarkupImges(items){
    return items.map(({original, preview, description}) => 
        `<a class="gallery__item" href="${original}" target="_blank" rel="noopener noreferrer nofollow">
        <img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join('')
}

// console.dir(SimpleLightbox)

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, captionClass: 'sl-capt'});
