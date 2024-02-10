//js for the main html page
import { APIKEY, APIURL, INITIAL } from './const.mjs';
import ExternalServices from './ExternalServices.mjs';
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter } from './utils.mjs';
import { loadNewData } from './inital.mjs';

INITIAL.forEach((element) => loadNewData(element));

//load header/footer wk 3
loadHeaderFooter();
prepareDoc();
let search = submit();
let parms = dropMenuEvents();


//setLocalStorage('crncs', new ExternalServices(null, url));
const dataSet = new ExternalServices(APIURL);

console.log(dataSet, 'dataset');
