import { APIKEY, APIHOST, APIURL, INITIAL } from "./const.mjs";
import { setLocalStorage } from "./utils.mjs";



export async function loadNewData(element, key){

    // if (localStorage.getItem(element) === null){
    //     return
    // }else{
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
    setLocalStorage(key, result)
	console.log('success')
	console.log(result);
} catch (error) {
	console.error(error);
// }
}
}