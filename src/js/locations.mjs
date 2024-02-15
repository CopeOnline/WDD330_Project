
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { getLocalStorage, loadHeaderFooter } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'

loadHeaderFooter();

if (getLocalStorage('search') != null){

    const location = new LocationList(eS);
    location.init();
}
