import { INITIAL } from './const.mjs';

export async function loadSearch(eS) {
    let i;
    let data;
    const mop = sessionStorage.getItem('searchTerm');
    const myObj = JSON.parse(mop);

    if (myObj[0].Loc === 'typeahead') {
        i = INITIAL.indexOf(myObj[0].Loc);
        data = eS.prepareSearchData(myObj, i);
    } else {
        data = eS.prepareData(myObj, i);
    }
}
