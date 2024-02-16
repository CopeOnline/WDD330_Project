
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { getLocalStorage, loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'

loadHeaderFooter();

const eS = new ExternalServices()
loadSearch(eS)
const location = new LocationList(eS);
location.init();

