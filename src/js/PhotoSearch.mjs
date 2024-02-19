
import Gallery from './PhotoGallery.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('photos'); 
console.log(dataSource)
const Id = getParams('location_id');
const myGallery = new Gallery(Id, dataSource);

myGallery.init();

// const favButton = document.getElementById('addToFavs'); 
// favButton.addEventListener('click', function () {
//     myList.addToFavs(favButton.getAttribute('data-id')); 
// });