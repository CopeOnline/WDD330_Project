
import LocationDetail from './LocationDetail.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('search'); 

//const location_id = dataSource.results
const Id = getParams('location_id');
const myList = new LocationDetail(Id, dataSource);

myList.init();

