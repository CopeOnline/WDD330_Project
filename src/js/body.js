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
