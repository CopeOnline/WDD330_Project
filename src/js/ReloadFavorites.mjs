
import FavReload from './FavReload.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('Id'); 
const Id = getParams('location_id');
const myFavReload= new FavReload(Id, dataSource);

myFavReload.init();
const favButton = document.getElementById('addToFavs'); 
favButton.addEventListener('click', function () {
    myList.addToFavs(favButton.getAttribute('data-id')); 
});

const photoBtn = document.getElementById('morePics'); 
photoBtn.addEventListener('click', function () {
    loadUpdates(photoBtn.getAttribute('data-id')); 
});


// Really needs to pull new info from API to be stable 