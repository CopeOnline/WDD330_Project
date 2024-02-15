
import LocationList from './LocationList.mjs';
import { loadSearch } from './body';
import { loadHeaderFooter, getLocalStorage, renderListWithTemplate } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs'
import { INITIAL } from './const.mjs';
import { submit } from './events.mjs';

function loadingCardTemplate(){
    return `<li class="loading-card">
        <h2 class="loading_state">Fetching your Results</h2>
    </li>`
}


loadHeaderFooter();
const eS = new ExternalServices();
loadSearch(eS)

const location = new LocationList(eS);
location.init();

