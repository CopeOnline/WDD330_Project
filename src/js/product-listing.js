//re-added product-listing page to force netlify to fix its brain
//js for the product-listing html page
import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParams, capitalizeWord } from './utils.mjs';

//load header/footer wk 3
loadHeaderFooter();

const category = getParams(this.value);

const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.search');
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);

// finally call the init method to show our products
myList.init();

//add category name
const categoryElement = document.getElementById('category-name');
categoryElement.innerHTML = capitalizeWord(category);
