import { loadHeaderFooter } from './utils.mjs';
import Favorite from './FavoriteLocations.mjs';

loadHeaderFooter();

const Faves = new Favorite('Id', '.location-list'); //Create new instance of Favorites
Faves.renderFavsContents(); //pull favs contents from local storage

//EVENT LISTENDER FOR CART DELETE BUTTONS
const deleteButtons = document.querySelectorAll('.close-btn'); //Grab all class .close-btn
deleteButtons.forEach((button) => {
    //create an event listender for each
    button.addEventListener('click', function () {
        Faves.removeFav(button.getAttribute('data-id')); //call the cart method removeItem.  passing the data-id of the item to delete
    });
});
