import ExternalServices from "./ExternalServices.mjs";
import { loadSearch } from "./body";
import { getParams } from "./utils.mjs";


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
        const searchTerm = [];
        let obj = new Object();
        obj.Loc = document.querySelector('#q').name;
        obj.Term = (`${document.querySelector('#q').value}`);
        searchTerm.push(obj)
        sessionStorage.setItem('searchTerm', (JSON.stringify(searchTerm)));
        const eS = new ExternalServices()
        loadSearch(eS)
        // window.location.replace('../searchResults/index.html');
        document.querySelector('#q').value = '';
    });
}





// export function dropMenuEvents(){
//     const dp = document.querySelectorAll('.dropdown-content > a');
//     let category;
//     dp.forEach(function(element) { element.addEventListener("click", (e) => {
//         SAMPLES.push('key:', element.name)
//     });
//     });
//     const dropMenu = document.querySelector('button.dropbtn');
//     dropMenu.addEventListener('click', (e) => {
//         document.querySelector('.dropdown-content').classList.toggle('show');
//     });
//     return category;
// };
    

