import { INITIAL } from './const.mjs';
import { hideElement, showElement } from './utils.mjs';

export function loadSearch(eS) {
    let i;
    const mop = sessionStorage.getItem('searchTerm');
    const myObj = JSON.parse(mop);

    if (myObj[0].Loc === 'typeahead') {
        i = INITIAL.indexOf(myObj[0].Loc);
        eS.prepareSearchData(myObj, i);
    } else {
        eS.prepareData(myObj, i);
    }
}
export function displayLoading() {
    const loader = document.querySelector('#loading');
    const loaderAlert = document.querySelector('#loading-alert');
    showElement(loader);
    showElement(loaderAlert);
    // to stop loading after some time
    setTimeout(() => {
        hideElement(loader);
        hideElement(loaderAlert);
    }, 5000);
}
