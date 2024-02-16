
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'

loadHeaderFooter();

const mop = sessionStorage.getItem('searchTerm');
const myObj = JSON.parse(mop);
const location = new LocationList(myObj);
location.init();

