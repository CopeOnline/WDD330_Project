//js for the main html page
import { prepareDoc, storageUpdate, submit } from './events.mjs';
import { loadHeaderFooter } from './utils.mjs';
import { initializeOptions } from './inital.mjs';

initializeOptions();
storageUpdate();
loadHeaderFooter();
prepareDoc();
submit();
