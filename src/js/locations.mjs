import ExternalServices from './ExternalServices.mjs';
import ProductDetails from '../../samples/ProductDetails.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

loadHeaderFooter();

const productId = getParams(this.value);
const dataSource = new ExternalServices();
const product = new ProductDetails(productId, dataSource);
product.init();

//js for the product_pages/index.html page
//get the productid from dynamic searchquery (url) using getParams in utils.js
//create product Data class from json using ProductData in ProductData.js
//create a ProductDetails class based on the id and data class.
//initialize productDetails which builds the product page details
