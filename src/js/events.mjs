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
            console.log('now load')
            window.location.href = '../searchResults/index.html';
        }, 5000);
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
    

