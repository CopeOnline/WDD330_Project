
import LocationDetail from './LocationDetail.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';
import { addFavsAndPics } from './events.mjs';

loadHeaderFooter();

let dataSource = getLocalStorage('search'); 

const Id = getParams('location_id');
const myList = new LocationDetail(Id, dataSource);

myList.init();
addFavsAndPics();