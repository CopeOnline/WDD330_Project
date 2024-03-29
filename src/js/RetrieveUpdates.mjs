import { APIURL, APIKEY, APIHOST, INITIAL, CRNCS, LANG} from "./const.mjs";


export async function convertToJson(res, key) {
  const jsonRes = await res.json();
  localStorage.setItem(key, JSON.stringify(jsonRes))
  if (res.ok) {
    return jsonRes;
  } else {
    throw {name: "servicesError", message: jsonRes};
  }
}
export async function getData(url, options, key){

  try {
  const response = await fetch(url, options);
  const data = await convertToJson(response, key);
  return data.Result;
}  catch (error) {
  console.error(error);
}
};

export default class RetrieveUpdates {

async prepareSearchData(myObj, i){
  const key = "search"
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
  getData(url, options, key)
};


async prepareData(myObj, i) {
      const key = 'photos'
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
    getData(url, options, key)
  };
}
