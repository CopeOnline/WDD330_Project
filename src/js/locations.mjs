
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'
import { storageUpdate } from './events.mjs';

loadHeaderFooter();
const eS = new ExternalServices();
loadSearch(eS)
storageUpdate()
const location = new LocationList(eS);
location.init();


