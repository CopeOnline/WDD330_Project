import { prepareData, prepareSearchData } from './ExternalServices.mjs';
import { INITIAL } from './const.mjs';

export async function loadSearch() {
    let i;
    let data;
    const mop = sessionStorage.getItem('searchTerm');
    const myObj = JSON.parse(mop);

    if (myObj[0].Loc === 'typeahead') {
        i = INITIAL.indexOf(myObj[0].Loc);

        data = prepareSearchData(myObj, i);
        
    } else {
        data = prepareData(myObj, i);
    }
}
