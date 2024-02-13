
import ProductDetails from './LocationDetails.mjs';
import { loadSearch } from './body';
import { loadHeaderFooter, getLocalStorage } from './utils.mjs';

loadHeaderFooter();

loadSearch()

const dataSource = getLocalStorage('search'); 
const location_id = dataSource.results.data[0].result_object.location_id
const location = new ProductDetails(location_id, dataSource);
location.init();

//js for the product_pages/index.html page
//get the productid from dynamic searchquery (url) using getParams in utils.js
//create product Data class from json using ProductData in ProductData.js
//create a ProductDetails class based on the id and data class.
//initialize productDetails which builds the product page details

