//js for the main html page
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter } from './utils.mjs';
import { initializeOptions } from './inital.mjs';

initializeOptions();
loadHeaderFooter();
prepareDoc();
submit();
