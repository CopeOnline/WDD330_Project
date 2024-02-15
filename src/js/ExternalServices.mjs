import { APIURL, APIKEY, APIHOST, INITIAL, CRNCS, LANG} from "./const.mjs";
import { setLocalStorage } from "./utils.mjs";

//Grabs the Info from json
export async function convertToJson(res) {
  const jsonRes = await res.json();
  localStorage.setItem('search', JSON.stringify(jsonRes))
  if (res.ok) {
    return jsonRes;
  } else {
    //if it's not ok, throw the error the server gives us
    throw {name: "servicesError", message: jsonRes};
  }
}
export async function getData(url, options){

  try {
  const response = await fetch(url, options);
  const data = await convertToJson(response);
  return data.Result;
}  catch (error) {
  console.error(error);
}
};

export default class ExternalServices {

async prepareSearchData(myObj, i){
  const url = APIURL + INITIAL[i];
  const term = myObj[0].Term
  const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': APIKEY,
    'X-RapidAPI-Host': APIHOST
    },
    body: new URLSearchParams({
      q: term, 
      language: LANG, 
    })
  };
  getData(url, options)
};


async prepareData(myObj, i) {
      const url = APIURL + INITIAL[i];
      const term = myObj[0].Term
      const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': APIHOST
        },
        body: new URLSearchParams({
          location_id: term, 
          language: LANG, 
          currency: CRNCS,
          offset: '0'
        })
      };
    getData(url, options)
  };
}
