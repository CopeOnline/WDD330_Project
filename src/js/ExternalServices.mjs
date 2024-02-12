import { APIURL, APIKEY, APIHOST, INITIAL, I, NUMS, CRNCS, LANG, SAMPLES} from "./const.mjs";
import { setLocalStorage } from "./utils.mjs";

//Grabs the Info from json
export async function convertToJson(res, i) {
  const jsonRes = await res.json();
  setLocalStorage('start'[i], jsonRes)
  if (res.ok) {
    return jsonRes;
  } else {
    //if it's not ok, throw the error the server gives us
    throw {name: "servicesError", message: jsonRes};
  }
}
let url = "";
let options = '';

export async function prepareData(i) {
      url = APIURL + INITIAL[I];
      const locId = SAMPLES[i];
      console.log(locId);
      options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': APIHOST
        },
        body: new URLSearchParams({
          location_id: locId, 
          language: LANG, 
          currency: CRNCS,
          offset: '0'
        })
      };
      console.log(url, options)
    getData(url, options, i)
  };

  async function getData(url, options, i){

    try {
	  const response = await fetch(url, options);
	  const data = await convertToJson(response, i);
    console.log(data, 'data')
	  return data.Result;
  }  catch (error) {
	  console.error(error);
  }
  };

