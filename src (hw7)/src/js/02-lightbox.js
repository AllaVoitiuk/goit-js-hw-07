import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardGallery = createGalleryMarkup(galleryItems);
 
galleryContainer.insertAdjacentHTML('beforeend',cardGallery);
galleryContainer.addEventListener ("click", onGalleryContainerClick);

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

function createGalleryMarkup(items) {
    return items
    .map (({preview,original,description}) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
      </a>`;
    })
    .join("");
 }

    function onGalleryContainerClick(event) {   

    if(event.target.nodeName !== "IMG"){
        return;
    }
   
    event.preventDefault();
    gallery.open();    
}