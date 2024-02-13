import { SAMPLES } from './const.mjs';
import { prepareData } from './ExternalServices.mjs';

export async function loadSearch() {
    for (let i = 0; i < SAMPLES.length; i++) {
        prepareData(i);

        // then get the element we want the product list to render in
        //const listElement = document.querySelector('.search');
        //console.log(listElement, 'listelemnt');
        // then create an instance of our ProductList class and send it the correct information.
        //const myList = new ProductList(category, dataSource, listElement);

        // finally call the init method to show our products
        //myList.init();

        //add category name
        //const categoryElement = document.getElementById('category-name');
    }
}
