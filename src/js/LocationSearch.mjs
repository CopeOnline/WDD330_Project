
import LocationList from './LocationList.mjs';
import { loadHeaderFooter, getLocalStorage } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('search'); 

const location_id = dataSource.results
// const listElement = document.querySelector('.search');
// then create an instance of our ProductList class and send it the correct information.
const myList = new LocationList(location_id, dataSource);

myList.init();

