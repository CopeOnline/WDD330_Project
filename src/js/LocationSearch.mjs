
import LocationDetail from './LocationDetail.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

let dataSource = getLocalStorage('search'); 

const Id = getParams('location_id');
const myList = new LocationDetail(Id, dataSource);

myList.init();
const favButton = document.getElementById('addToFavs'); 
favButton.addEventListener('click', function () {
    myList.addToFavs(favButton.getAttribute('data-id')); 
});

const photoBtn = document.getElementById('morePics'); 
photoBtn.addEventListener('click', function () {
    loadUpdates(photoBtn.getAttribute('data-id')); 
});
