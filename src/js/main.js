//js for the main html page
import ExternalServices from './ExternalServices.mjs';
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter } from './utils.mjs';
import { initializeOptions } from './inital.mjs';


initializeOptions()
//load header/footer wk 3
loadHeaderFooter();
prepareDoc();
submit();
dropMenuEvents();

//setLocalStorage('crncs', new ExternalServices(null, url));
// const dataSet = new ExternalServices(APIURL);

// console.log(dataSet, 'dataset');
