import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

 const galleryContainer = document.querySelector('.gallery')
galleryContainer.insertAdjacentHTML('afterbegin',createGalaryItems (galleryItems))



//  console.log(createGalaryItems (galleryItems))

function createGalaryItems(galleryItems){

     return galleryItems.map(({preview, original, description})=>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
        `
    }).join('')
}

galleryContainer.addEventListener('click', onGalleryClick)
 
let instance;

function onGalleryClick(event){
   event.preventDefault()
   if(!event.target.classList.contains('gallery__image')){
     return
   }
   instance = basicLightbox.create (`
   <img src="${event.target.dataset.source}" width="800" height="600">
`), 
onShow()
instance.show()
}



function onShow() {
	window.addEventListener("keydown", onEscPress);
}

function onClose() {
	window.removeEventListener("keydown", onEscPress);
}

function onEscPress(event) {
	if (event.code === "Escape") {
		instance.close();
		onClose();
	}
}

