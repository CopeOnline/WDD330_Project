//js for the main html page
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter, sampleIds } from './utils.mjs';
import { initializeOptions } from './inital.mjs';
import { loadSamples } from './body';



initializeOptions()
loadHeaderFooter();
prepareDoc();
submit();
dropMenuEvents();
sampleIds();
loadSamples();
