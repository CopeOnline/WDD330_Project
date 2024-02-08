import { getParams } from './utils.mjs';
//import ExternalServices from './ExternalServices.mjs';
// body: new URLSearchParams({
//     location_id: '8797440',
//     language: 'en_US',
//     currency: 'USD',
//     offset: '0',
// });

const category = getParams(search);
console.log(category, 'category');
const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.search');
console.log(listElement, 'listelemnt');
// then create an instance of our ProductList class and send it the correct information.
//const myList = new ProductList(category, dataSource, listElement);

// finally call the init method to show our products
//myList.init();

//add category name
//const categoryElement = document.getElementById('category-name');
