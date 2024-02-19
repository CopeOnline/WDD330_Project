import ExternalServices from "./ExternalServices.mjs";
import { loadSearch, displayLoading } from "./body";


export function prepareDoc(){
    document.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 'complete'){
            return 
        }
    })
}
export function submit() {
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        displayLoading();
        const searchTerm = [];
        let obj = new Object();
        obj.Loc = document.querySelector('#q').name;
        obj.Term = (`${document.querySelector('#q').value}`);
        searchTerm.push(obj)
        sessionStorage.setItem('searchTerm', (JSON.stringify(searchTerm)));
        const eS = new ExternalServices()
        loadSearch(eS)
        setTimeout(() => {
            document.querySelector('#q').value = '';
            window.location.href = '../searchResults/index.html';
        }, 5000);
    });
}

