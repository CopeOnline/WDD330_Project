import { APIKEY, APIHOST, APIURL, INITIAL } from "./const.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export async function loadNewData(element){

    if (localStorage.getItem(element) === null){
        return
    }else{
    const keys = ['crncs', 'lang']
    const keyINDX = INITIAL.indexOf(element)
    const url = APIURL + element;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': APIKEY,
		'X-RapidAPI-Host': APIHOST
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setLocalStorage(keys[keyINDX], result)
	console.log(result);
} catch (error) {
	console.error(error);
}
}
}