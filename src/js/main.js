//js for the main html page
import ExternalServices from './ExternalServices.mjs';
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter } from './utils.mjs';
import { loadNewData } from './inital.mjs';


async function initializeOptions( ){
    localStorage.clear()
    await loadNewData('currencies', "crncs")
    await setTimeout(() => { loadNewData('languages', 'lang')}, 1200)
}


initializeOptions()
//load header/footer wk 3
loadHeaderFooter();
prepareDoc();
submit();
dropMenuEvents();

//setLocalStorage('crncs', new ExternalServices(null, url));
// const dataSet = new ExternalServices(APIURL);

// console.log(dataSet, 'dataset');
