//js for the main html page
import ExternalServices from './ExternalServices.mjs';
//import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

//load header/footer wk 3
loadHeaderFooter();
let form = document.querySelector('.search');
form.addEventListener('submit', (e) => {
    console.log(e);
});

const category = getParams(document.querySelector('.search'));
console.log(category, 'category');
//const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.search');
console.log(listElement, 'listelemnt');
// then create an instance of our ProductList class and send it the correct information.
//const myList = new ProductList(category, dataSource, listElement);

// finally call the init method to show our products
//myList.init();

//add category name
//const categoryElement = document.getElementById('category-name');
