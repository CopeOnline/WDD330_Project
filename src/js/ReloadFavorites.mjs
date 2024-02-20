
import FavReload from './FavReload.mjs';
import { addFavsAndPics } from './events.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('Id'); 
const Id = getParams('location_id');
const myFavReload= new FavReload(Id, dataSource);

myFavReload.init();
addFavsAndPics()

// Really needs to pull new info from API to be stable 