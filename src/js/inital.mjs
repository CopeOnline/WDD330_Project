import { APIKEY, APIHOST, APIURL,  } from "./const.mjs";
import { setLocalStorage } from "./utils.mjs";


export async function initializeOptions( ){
    localStorage.clear()
    await loadNewData('currencies', "crncs")
    await setTimeout(() => { loadNewData('languages', 'lang')}, 1200)
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
	console.log('success')
	console.log(result);
} catch (error) {
	console.error(error);
};
};

