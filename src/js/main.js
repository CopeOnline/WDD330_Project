//js for the main html page
import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
import { loadHeaderFooter, sampleIds } from './utils.mjs';
import { initializeOptions } from './inital.mjs';
import { loadSamples } from './body';
import { NUMS } from './const.mjs';



initializeOptions()
loadHeaderFooter();
prepareDoc();
submit();
dropMenuEvents();
NUMS.push(sampleIds());

