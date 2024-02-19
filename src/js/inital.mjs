import { APIKEY, APIHOST, APIURL, INITIAL  } from "./const.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";


export async function initializeOptions( ){
    localStorage.removeItem('search')
	const chMem = getLocalStorage('Id')
	if (chMem.length === 0){
		localStorage.removeItem('Id')
	}
};

export async function loadNewData(element, key){
    const url = APIURL + element;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': APIKEY,
		'X-RapidAPI-Host': APIHOST
			},
		};
try {
	const response = await fetch(url, options);
	const result = await response.json();
    setLocalStorage(key, result)
} catch (error) {
	console.error(error);
};
};
export async function startingSearch(){
	const alt = new ExternalServices()
	const starting = [];
	let obj = new Object();
	obj.Loc = INITIAL[2] //sets the key as typehead in session storage
	obj.Term = "Nauvoo"
	starting.push(obj)
	sessionStorage.setItem('starting', (JSON.stringify(starting)));
	const i = '2' //Sets the url to typeahead
	const myOBJ = sessionStorage.getItem('starting')
	const myObj = JSON.parse(myOBJ);
	alt.prepareSearchData(myObj, i)
	};
