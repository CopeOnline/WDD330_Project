
import LocationList from './LocationList.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const mop = sessionStorage.getItem('searchTerm');
const myObj = JSON.parse(mop);
const location = new LocationList(myObj);
location.init();

