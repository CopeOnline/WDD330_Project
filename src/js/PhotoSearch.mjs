
import Gallery from './PhotoGallery.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('photos'); 
const Id = getParams('location_id');
const myGallery = new Gallery(Id, dataSource);

myGallery.init();

