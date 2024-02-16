import { INITIAL } from './const.mjs';

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
    const loader = document.querySelector("#loading")
    const loaderAlert = document.querySelector("#loading-alert")
    loader.classList.toggle("display");
    loaderAlert.classList.toggle("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
        loaderAlert.classList.remove("display");
    }, 3000);
    
}
export function hideLoading() {
    loader.classList.remove("display");
    loaderAlert.classList.remove("display");
}