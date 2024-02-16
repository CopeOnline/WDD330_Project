
import LocationDetail from './LocationDetail.mjs';
import { loadHeaderFooter, getLocalStorage, getParams } from './utils.mjs';

loadHeaderFooter();

const dataSource = getLocalStorage('search'); 


const Id = getParams('location_id');
const myList = new LocationDetail(Id, dataSource);

myList.init();
