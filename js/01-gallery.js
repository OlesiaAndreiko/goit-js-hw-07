import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallary = document.querySelector('.gallery')


// function createMarkup(items) {
//     return 
//     items.map(item => 
//         `<a class="gallery__link" href="${galleryItem.original}" target="_blank" rel="noopener noreferrer nofollow">
//         <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a>`).join('')
        
//         gallary.insertAdjacentHTML('beforeend', markup)
// }
const markup = galleryItems.map(galleryItem => 
`<a class="gallery__link" href="${galleryItem.original}" target="_blank" rel="noopener noreferrer nofollow">
<img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a>`).join('')

gallary.insertAdjacentHTML('beforeend', markup)

gallary.addEventListener('click', onModalOpen)

function onModalOpen(evt) {
    evt.preventDefault()
    if(evt.target.nodeName !== "IMG") {
        return
    } 
    // console.log(evt.target.currentSrc);
    // console.log(evt.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src="${evt.target.currentSrc}">
    `, {onShow: instance => {
        document.addEventListener('keydown', onModalClose);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onModalClose);
      }})   

    instance.show()
    
    function onModalClose (evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
}
}
