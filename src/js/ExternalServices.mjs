import { APIURL, INITIAL, APIKEY, APIHOST } from "./const.mjs";

//Grabs the Product Info from json
export async function convertToJson(res) {
  //convert reponse to json to collect all the info the server passes back
  const jsonRes = await res.json();
  //console.log('json',JSON.stringify(jsonRes))
  //if check if respone = ok
  if (res.ok) {
    return jsonRes;
  } else {
    //if it's not ok, throw the error the server gives us
    throw {name: "servicesError", message: jsonRes};
  }
}

export default class ExternalServices {
  async getData(body) {

    const url = APIURL + INITIAL[0];
    const options = {
	  method: 'GET',
	  headers: {
		 'X-RapidAPI-Key': APIKEY,
		 'X-RapidAPI-Host': APIHOST
	    },
    };

    try {
	  const response = await fetch(url, options);
	  const data = await convertToJson(response);
    console.table(data);
	  return data.Result;
  }  catch (error) {
	  console.error(error);
  }
  }
 }

