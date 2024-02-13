import { prepareData, prepareSearchData } from './ExternalServices.mjs';
import { INITIAL } from './const.mjs';

export async function loadSearch(action) {
    let i;
    const mop = sessionStorage.getItem('searchTerm');
    const myObj = JSON.parse(mop);

    if (myObj[0].Loc === 'typeahead') {
        i = INITIAL.indexOf(myObj[0].Loc);
        console.log(i);
        window.location = action;
        prepareSearchData(myObj, i, action);
    } else {
        prepareData(myObj, i, action);

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
