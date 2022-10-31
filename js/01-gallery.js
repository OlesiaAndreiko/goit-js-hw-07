import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallaryImges = document.querySelector('.gallery');
const markupGallary = createMarkupImges(galleryItems);
gallaryImges.insertAdjacentHTML('beforeend', markupGallary)
gallaryImges.addEventListener('click', onModalOpen)

function createMarkupImges(items){
    return items.map(({original, preview, description}) => 
        `<a class="gallery__link" href="${original}" target="_blank" rel="noopener noreferrer nofollow">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a>`).join('')
}

function onModalOpen(evt) {
    evt.preventDefault()
    if(evt.target.nodeName !== "IMG") {
        return
    } 
    // console.log(evt.target.currentSrc);
    // console.log(evt.target.dataset.source);
        
    const instance = basicLightbox.create(`
    <img src="${evt.target.currentSrc}">
    `, {
        closable: false,
        className: 'basicLightbox__background',
        onShow: instance => {
        document.addEventListener('keydown', onModalClose);
        },
        onClose: instance => {
        document.removeEventListener('keydown', onModalClose);
        }
       }
    )   

    instance.show()
    
    function onModalClose (evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}
