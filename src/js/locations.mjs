
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { loadHeaderFooter, getLocalStorage } from './utils.mjs';

loadHeaderFooter();

loadSearch()

const dataSource = getLocalStorage('search'); 
const location_id = dataSource.results.data[0].result_object.location_id
const location = new LocationList(location_id, dataSource);
location.init();

