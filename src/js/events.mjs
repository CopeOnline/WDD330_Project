import RetrieveUpdates from "./RetrieveUpdates.mjs";
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
        const eS = new RetrieveUpdates()
        loadSearch(eS)
        setTimeout(() => {
            document.querySelector('#q').value = '';
            window.location.href = '../searchResults/index.html';
        }, 5000);
    });
}
export function loadUpdates() {
    displayLoading();
    const searchTerm = [];
    let obj = new Object();
    obj.Loc = document.querySelector('#morePics').name;
    obj.Term = (`${document.querySelector('#morePics').getAttribute('data-id')}`);
    searchTerm.push(obj)
    sessionStorage.setItem('searchTerm', (JSON.stringify(searchTerm)));
    const eS = new RetrieveUpdates()
    loadSearch(eS)
    setTimeout(() => {
        document.querySelector('#morePics').value = '';
        window.location.href = '../PhotoGallery/index.html';
    }, 5000);
}

export function addFavsAndPics (myList){
    const favButton = document.getElementById('addToFavs'); 
favButton.addEventListener('click', function () {
    myList.addToFavs(favButton.getAttribute('data-id')); 
});

const photoBtn = document.getElementById('morePics'); 
photoBtn.addEventListener('click', function () {
    loadUpdates(photoBtn.getAttribute('data-id')); 
});

}