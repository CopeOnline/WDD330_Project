//js for the main html page

import { dropMenuEvents, prepareDoc, submit } from './events.mjs';
//import ProductList from './ProductList.mjs';
import { loadHeaderFooter } from './utils.mjs';

//load header/footer wk 3
loadHeaderFooter();
prepareDoc();
let search = submit();
let parms = dropMenuEvents();
